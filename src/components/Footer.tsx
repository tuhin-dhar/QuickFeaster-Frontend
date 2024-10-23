const Footer = () => {
  return (
    <div className="bg-gradient-to-br from-custom to-customLight py-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between">
        <span className="text-3xl font-bold text-dark traking-tight">
          QuickFeaster
        </span>
        <span className="text-white font-bold tracking-tight flex gap-4">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
        </span>
      </div>
    </div>
  );
};

export default Footer;
