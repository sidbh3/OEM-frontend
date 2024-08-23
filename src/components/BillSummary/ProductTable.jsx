import React from "react";

const ProductTable = ({ products }) => {
  return (
    <table className="w-full bg-gray-100 text-sm mt-4">
      <thead>
        <tr className="bg-gray-200 text-xs font-semibold">
          <th className="py-2 px-4 text-left">Product</th>
          <th className="py-2 px-4 text-center">Qty</th>
          <th className="py-2 px-4 text-right">Gross Amount</th>
          <th className="py-2 px-4 text-right">Discount</th>
          <th className="py-2 px-4 text-right">Total Payable Amount</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product, index) => (
          <tr key={index} className="border-t bg-white">
            <td className="py-2 px-4">{product.name}</td>
            <td className="py-2 px-4 text-center">{product.qty}</td>
            <td className="py-2 px-4 text-right">
              {product.grossAmount.toFixed(2)}
            </td>
            <td className="py-2 px-4 text-right">
              {product.discount.toFixed(2)}
            </td>
            <td className="py-2 px-4 text-right">
              {product.totalPayable.toFixed(2)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductTable;
