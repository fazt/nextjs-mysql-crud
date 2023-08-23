"use client";
import axios from "axios";
import { useRouter } from "next/navigation";

function Buttons({ productId }) {
  const router = useRouter();

  return (
    <div className="flex gap-x-2 justify-end mt-2">
      <button
        className="text-white bg-red-500 hover:bg-red-700 py-2 px-3 rounded"
        onClick={async () => {
          if (confirm("are you sure you want to delete this prodcut?")) {
            const res = await axios.delete("/api/products/" + productId);
            if (res.status === 204) {
              router.push("/products");
              router.refresh();
            }
          }
        }}
      >
        delete
      </button>
      <button
        className="text-white bg-gray-500 hover:bg-gray-700 py-2 px-3 rounded"
        onClick={() => {
          router.push(`/products/edit/${productId}`);
        }}
      >
        Edit
      </button>
    </div>
  );
}

export default Buttons;
