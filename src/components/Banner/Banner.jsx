import profile from '../../assets/pngwing 1.png'

const Banner = () => {
    return (
        <div className="hero min-h-screen bg-base-200 rounded-lg">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={profile} className="max-w-sm rounded-lg" />
                <div className='mr-48'>
                    <h1 className="text-[#131313] font-bold text-5xl">Books to freshen <br /> up your bookshelf</h1>
                    <button className="btn bg-[#23BE0A] text-white mt-10">View The List</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;