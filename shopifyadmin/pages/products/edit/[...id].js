import Layout from "@/components/Layout";
import { useRouter } from "next/router";
import { useEffect } from "react";
import axios from "axios";
import ProductForm from "@/components/ProductForm";
import { useState } from "react";


export default function EditProductPage() {
  const [productInfo, setProductInfo] = useState(null);
  const router = useRouter();
  // console.log({router});
  const { id } = router.query;
  useEffect(() => {
    if (!id) {
      return;
    }
    axios.get("/api/products?id=" + id).then((response) => {
      // console.log(response.data);
      setProductInfo(response.data)
    });
  }, [id]);
  return (
    <Layout>
      <h1>
        <b>Edit Product</b>
      </h1>
      {productInfo && (
              <ProductForm {...productInfo}/>
      )}
    </Layout>
  );
}
