export default function Footer() {
    return (
      <footer className="bg-neutral-500 text-white py-4 ">
        <div className="container mx-auto text-center">
          <hr className="border-gray-600 mb-4" />
          <p className="text-sm">
            © {new Date().getFullYear()} FrameWorld . All rights reserved.
          </p>
          <p className="text-xs text-gray-300 mt-2">
            Designed by Muniza Zubair
          </p>
        </div>
      </footer>
    );
  };
  
  