import Stripe from "stripe";

const stripe=new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req,res){
  if(req.method==='POST'){
    try{
        let params={
          submit_type:'pay',
          mode:'payment',
          payment_method_types:['card'],
          billing_address_collection:'auto',
          shipping_options:[
          {shipping_rate:"shr_1LLV4FLpLW4kcNhyEVX8xHAi"},
          {shipping_rate:"shr_1LLV5SLpLW4kcNhyLgDNEAxU"}
          ],
          line_items:req.body.map(item=>{
              const img=item.image[0].asset._ref;
              const newImage=img.replace('image-',"https://cdn.sanity.io/images/mdocqtni/production/").replace('-webp','.webp');
              return {
                price_data:{
                  currency:'usd',
                  product_data:{
                    name:item.name,
                    images:[newImage],                    
                  },
                  unit_amount:item.price*100,
                },
                  adjustable_quantity:{
                    enabled:true,
                    minimum:1,
                  },
                  quantity:item.quantity
              }
          }),
          success_url: `${req.headers.origin}/success`,
          cancel_url: `${req.headers.origin}/canceled`,
        };
        //Create checkout session
        const session=await stripe.checkout.sessions.create(params);
        res.status(200).json(session);
    }
    catch(error){
      res.status(500).json({statusCode:500,message:error.message})
    }

  }
  else{
    res.setHeader('Allow','POST');
    res.status(405).end("Method Not Allowed")
  }
}
