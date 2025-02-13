function Card({name,college,imageSource,phone}) {
    return (
        <div className="bg-slate-400 h-[200px] w-[150px] p-4 flex flex-col items-center justify-center relative group">
            <img className="h-[100px] w-[100px] rounded-full" src={imageSource} />
            <p className="font-mono">{name}</p>
            <div className="bg-[rgba(0,0,0)]/[0.5] p-4 flex flex-col items-center justify-center absolute top-0 bottom-0 left-0 right-0 opacity-0 group-hover:opacity-100 animate-none ">
                <p className="text-white">{name}</p>
                <p className="text-white">{college}</p>
                <p className="text-white">{phone}</p>
            </div>
        </div>
        //export default : no curly braces but can rename
    );
}

export default Card;
