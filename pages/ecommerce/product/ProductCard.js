import React, { useState } from "react";
import Laptop from "public/assets/Ention-Laptop-E3-Catalogue-design-2.png";
import { TbCirclePlus } from "react-icons/tb";
import { useRouter } from "next/router";
import CustomDropdown from "components/CustomDropdown";
import Image from 'next/image';

const ProductCard = (props) => {
  const { label, className, viewClick, pdfCatalogLink } = props;
  const router = useRouter();
  const [processorSelection, setProcessorSelection] = useState("");
  const [memorySelection, setMemorySelection] = useState("");
  const [storageSelection, setStorageSelection] = useState("");
  const [generationSelection, setGenerationSelection] = useState("");
  const productData = {}; // No longer using newProducts

  return (
    <div className={`w-[360px] flex flex-col items-center ${className}`}>
      <div className="flex flex-col justify-evenly items-center w-[132px] h-[66px] rounded-t-full bg-[#F5F5F7] text-black text-3xl font-bold">
        {label}
      </div>
      <div className="flex flex-col items-center w-full  px-2 py-3 bg-[#F5F5F7] rounded-3xl gap-4 pt-4">
        <div className="flex flex-col gap-4 items-center">
          <Image
            className="w-[280px] h-full object-cover"
            src={Laptop}
            alt="product-image"
            width={280}
            height={180}
          />
          <a
            className="text-[#199AB7] text-sm flex items-center gap-2 cursor-pointer"
            onClick={viewClick}
          >
            View gallery <TbCirclePlus fontSize={"20px"} />
          </a>
          <a
            className="text-[#199AB7] text-sm flex items-center gap-2 cursor-pointer"
            href={pdfCatalogLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Product Catalogue
          </a>
        </div>
        <div className="flex items-center gap-4 mt-5">
          {/* CPU images removed due to missing files */}
        </div>
        <div className="w-[250px] flex flex-col gap-6 mt-10">
          <h3 className="text-2xl text-black font-semibold">
            Core Cpu 16Gb Memory 512Gb SSD Storage
          </h3>
          <p className="font-semibold text-lg mt-6">Processor</p>
          <CustomDropdown
            setValue={setProcessorSelection}
            value={processorSelection}
            items={["Intel", "Ryzen"]}
            on
          ></CustomDropdown>

          {processorSelection ? (
            <div>
              <p className="font-semibold text-lg mt-6">Generation</p>
              <CustomDropdown
                value={generationSelection}
                setValue={setGenerationSelection}
                items={
                  processorSelection === "Intel"
                    ? ["Intel core i4", "Intel core i5", "Intel core i6"]
                    : ["AMD Ryzen 3", "AMD Ryzen 4", "AMD Ryzen 5"]
                }
              ></CustomDropdown>
            </div>
          ) : null}

          <p className="font-semibold text-lg mt-6">Memory</p>
          <CustomDropdown
            value={memorySelection}
            setValue={setMemorySelection}
            items={["16 GB Unified Memory", "32 GB Unified Memory"]}
          />
          <p className="font-semibold text-lg mt-6">Storage</p>
          <CustomDropdown
            value={storageSelection}
            setValue={setStorageSelection}
            items={["512 GB SSD Storage", "1 TB SSD Storage"]}
          />
          <div className="flex flex-col gap-1 mt-5 ">
            {Object.keys(productData || {}).map((key) => {
              return <Detail title={key} content={productData[key]}></Detail>;
            })}
          </div>
          <div className="text-black font-bold text-3xl text-center w-full mt-4">
            Coming soon
          </div>
          <button className=" w-[253px] h-[42px] bg-[rgb(34,209,238)] hover:bg-[hsl(189,61%,50%)] rounded-xl flex justify-center items-center text-white text-lg hover:scale-105  transition-all duration-300 ease-in-out mt-4">
            Buy Now
          </button>
          <button
            className="text-[#199AB7] hover:scale-105  transition-all duration-300 ease-in-out border border-blue-400 rounded-xl p-3 text-sm font-bold cursor-pointer text-center mb-5"
            onClick={() => router.push(`/product/${label}`)}
          >
            Know more...
          </button>
        </div>
      </div>
    </div>
  );
};

const Detail = (props) => {
  return (
    <div className="text-base flex flex-col gap-1">
      <p>
        <b>{props.title}</b>
      </p>
      {props.content != null && <p>{props.content}</p>}
    </div>
  );
};

export default ProductCard;
