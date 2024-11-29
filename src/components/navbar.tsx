import { FaShoppingBag } from "react-icons/fa";

export default function Navbar() {
  return (
    <div className="relative w-full h-20 overflow-hidden flex justify-between items-center px-6 border-b">
      <header className="flex items-center gap-2 left-10 top-8">
        <div className="size-10 bg-primary rounded-md ">
          <FaShoppingBag />
        </div>
      </header>
    </div>
  );
}
