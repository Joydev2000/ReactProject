const Header = ()=>{
    return(
        <div className="Navbar w-full text-white px-20 py-5 flex justify-between">
      <div className="logo">
      <h2 className="text-2xl font-bold">Joydev.</h2>
      </div>
      <div className="links flex gap-10">
      {["Home", "About Us","Contact Us", "insight"].map ((items, index) => {
          return <a key={index} href="" className={`text-2xl font-['Neue Montreal'] ${index === 4 && "ml-60"}`}>{items}</a>
      })}
      </div>
    </div>
    )
}

export default Header;