import Image from 'next/image';

const ItemImage = (props) => {
  const { img, text, label } = props;
  return (
    <div className="flex items-center justify-center relative text-white font-normal rounded-3xl overflow-hidden">
      <Image src={img} alt="analog-img" className="w-[560px] h-auto" width={560} height={400} loading="lazy" />
      {label}
      {/* <p className={`absolute text-center ${cn}`}>{text}</p> */}
    </div>
  );
};
export default ItemImage;