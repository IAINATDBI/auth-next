import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-[#ff3e4c] text-white font-inter p-10 rounded-t-lg">
      <section className="flex flex-wrap justify-center items-center gap-10 md:flex-nowrap">
        <div className="flex flex-col items-start justify-center gap-5 max-w-[240px] font-poppins">
          <div className="flex items-center gap-2.5">
            <Image src="/logo.svg" alt="ReJob Logo" width={37} height={29} className="overflow-hidden" />
            <b className="text-2xl min-w-[86px]">ReJob</b>
          </div>
          <p className="text-lg leading-[30px] tracking-tight">
            ReJob was created to hand back power to the job seeker. We create an environment that is stress free, automated and that uses AI-powered technology
          </p>
        </div>

        <div className="flex flex-wrap justify-between gap-10 md:gap-20 min-w-[300px] md:min-w-[700px] max-w-[800px] text-base">
          {[
            { title: 'Product', items: ['Overview', 'Pricing', 'Customer stories'] },
            { title: 'Resources', items: ['Blog', 'Guides & tutorials', 'Help center'] },
            { title: 'Company', items: ['About us', 'Careers', 'Media kit'] }
          ].map((column, index) => (
            <div key={index} className="flex flex-col gap-5">
              <h3 className="text-lg font-bold">{column.title}</h3>
              {column.items.map((item, itemIndex) => (
                <Link key={itemIndex} href="#" className="tracking-tight">{item}</Link>
              ))}
            </div>
          ))}
        </div>

        <div className="flex flex-col items-end gap-5 w-full md:w-[259px]">
          <h3 className="text-2xl font-bold leading-9 tracking-tight">Try It Today</h3>
          <p className="text-right text-base leading-5 tracking-tight">
            Get started for free. Add your whole team as your needs grow.
          </p>
          <button className="bg-white text-[#ff3e4c] px-10 py-5 rounded-lg flex items-center gap-2.5">
            <span className="text-sm capitalize min-w-[81px]">Start today</span>
            <Image src="/group-214.svg" alt="Arrow" width={14} height={14} />
          </button>
        </div>
      </section>

      <div className="flex flex-wrap justify-between items-center mt-10 gap-5">
        <div className="flex flex-wrap gap-[60px] text-base">
          <Link href="#" className="tracking-tight min-w-[117px]">Terms & privacy</Link>
          <Link href="#" className="tracking-tight min-w-[60px]">Security</Link>
          <Link href="#" className="tracking-tight min-w-[47px]">Status</Link>
          <span className="tracking-tight">©2024 Neuron Data LLC.</span>
        </div>
        <div className="flex gap-5">
          <Image src="/-x30-1-facebook.svg" alt="Facebook" width={9} height={17} />
          <Image src="/twitter.svg" alt="Twitter" width={17} height={13.8} />
          <Image src="/linkedin.svg" alt="LinkedIn" width={15} height={15} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;