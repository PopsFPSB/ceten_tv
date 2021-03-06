import React from "react";
import { Link } from "react-router-dom";
import ListDeleteButton from "./ListDeleteButton";

export default function ImageListLine(
  imageName: string,
  removeImage: (image: string) => void
) {
  const displayName = imageName.split(".")[0];
  return (
    <tr
      key={imageName}
      className="hover:bg-slate-700 border-y-2 border-slate-700"
    >
      <td className="relative w-4/12 px-2 py-2 lg:px-6 lg:py-4">
        <Link to={`/admin/${imageName}`}>
          <img src={`/api/image/${imageName}`} alt={displayName} />
        </Link>
      </td>
      <td className="w-10 px-2 py-2 text-xs text-left text-white truncate lg:text-2xl lg:px-6 lg:py-4">
        <Link to={`/admin/${imageName}`}>
          <span className="hover:underline">{displayName}</span>
        </Link>
      </td>
      <td className="w-px px-2 py-2 text-center lg:px-6 lg:py-4">
        <div className="inline-block">
          <ListDeleteButton imageName={imageName} removeImage={removeImage} />
        </div>
      </td>
    </tr>
  );
}
