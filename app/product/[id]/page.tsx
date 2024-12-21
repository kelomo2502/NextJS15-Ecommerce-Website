import ProductDetails from "@/app/components/ProductDetails";

// Define the type for the params object
interface ProductPageProps {
  params: { id: string }; // Specify that `params` contains an `id` of type `string`
}

export default function ProductPage({ params }: ProductPageProps) {
  const { id } = params;

  // Fetch product details
  return <ProductDetails id={id} />;
}
