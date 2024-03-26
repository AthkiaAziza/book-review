import { FaRegStar } from "react-icons/fa";


const Book = ({book}) => {
    const {image, tags, bookName, author, category, rating} = book;
    
    return (
        <div>
            <div className="card border-2 mt-10 bg-base-100 p-2 lg:p-6 mr-3 ml-3">
                <figure className="bg-base-200 rounded-xl h-[250px]">
                    <img src={image} className="rounded-lg bg-base-200 h-[200px]" />
                </figure>
                <div className="card-body">
                    <div className="flex gap-5">
                        {
                            tags.map((tag, idx) => <span key={idx} className="bg-[#23BE0A0D] rounded-3xl text-[#23BE0A] font-medium text-base p-3">#{tag}</span>)
                        }
                    </div>
                    <p className="text-[#131313] font-bold text-2xl">{bookName}</p>
                    <p className="text-[#131313CC] font-medium text-base">By : {author}</p>
                    <div className="divider"></div>
                    <div className="flex">
                        <p className="text-[#131313CC] font-medium text-xl">{category}</p>
                        <div className="flex gap-3">
                            <p className="flex gap-3 text-[#131313CC] font-medium text-xl"><FaRegStar className="text-2xl"></FaRegStar>{rating}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Book;