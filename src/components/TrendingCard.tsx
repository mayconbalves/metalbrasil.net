import { Link } from "react-router-dom";

interface TrendingCardProps {
  title: string;
  image: string;
  slug: string;
  index: number;
}

const TrendingCard = ({ title, image, slug, index }: TrendingCardProps) => {
  return (
    <Link to={`/post/${slug}`} className="flex gap-3 group hover:bg-muted/50 p-2 rounded transition-colors">
      <div className="flex-shrink-0">
        <span className="text-4xl font-black text-primary/20 group-hover:text-primary transition-colors">
          {index}
        </span>
      </div>
      
      <div className="flex-1 min-w-0">
        <img 
          src={image} 
          alt={title}
          className="w-full h-20 object-cover rounded mb-2"
        />
        <h4 className="font-bold text-sm line-clamp-2 group-hover:text-primary transition-colors">
          {title}
        </h4>
      </div>
    </Link>
  );
};

export default TrendingCard;
