import { useEffect, useState } from "react";
import { addDoc, collection, getDocs } from "firebase/firestore";
import db from "../../fireBase/FireBase";
import { useSelector } from "react-redux";
import { selectUser } from "../../stateManagement/userReducer";
import { loadStripe } from "@stripe/stripe-js";

type Product = {
  id: string;
  name: string;
  description: string;
  priceID: string;
};

const PlanScreen = () => {
  const [products, setProducts] = useState<Product[] | null>(null);
  const user = useSelector(selectUser);

  useEffect(() => {
    const getProducts = async () => {
      const productsRef = collection(db, "products");
      const productsSnap = await getDocs(productsRef);

      if (!productsSnap.empty) {
        const products = productsSnap.docs.map((product) => ({
          id: product.id,
          name: product.data().name,
          description: product.data().description,
          priceID: product.data().priceID,
        }));

        setProducts(products);
      } else {
        console.log("No products Found!");
      }
    };
    return () => {
      getProducts();
    };
  }, []);

  const loadCheckout = async (priceID: string) => {
    const customerRef = collection(db, "customers");
    await addDoc(customerRef, {
      uid: user.uid,
      email: user.email,
      priceID: priceID,
    });

    const stripePromise = loadStripe(
      "pk_test_51NcnfOSEXKh4Ap3m5wi2mGkFzX7wMbcufvr1p4izYHJ4anUa4Y8deO4zuJzRGeVtdOEMJZ7Tn3iKVl1xppbWo8z9002sri06tb"
    );

    const stripe = await stripePromise;
    await stripe?.redirectToCheckout({
      lineItems: [
        {
          price: priceID,
          quantity: 1,
        },
      ],
      mode: "subscription",
      successUrl: window.location.origin,
      cancelUrl: window.location.origin,
    });
  };

  return (
    <div className="">
      <div>
        {products?.map((product) => (
          <div key={product.id}>
            <div className="flex justify-between  pt-4 pb-4 sm:pt-5 sm:pb-5 opacity-80 hover:opacity-100 cursor-pointer">
              <div>
                <h1 className="text-xl sm:text-3xl">{product.name}</h1>
                <h2 className="text-xl sm:text-2xl">{product.description}</h2>
              </div>
              <button
                onClick={() => {
                  loadCheckout(product.priceID);
                }}
                className="pt-3 pb-3 pl-5 pr-5 bg-[#e50914] sm:text-2xl border-none"
              >
                Subscribe
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlanScreen;
