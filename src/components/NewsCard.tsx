import { Link } from "react-router-dom";
import { Calendar, User } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface NewsCardProps {
  title: string;
  excerpt: string;
  image: string;
  category: string;
  author: string;
  date: string;
  slug: string;
  featured?: boolean;
}

const NewsCard = ({ 
  title, 
  excerpt, 
  image, 
  category, 
  author, 
  date, 
  slug,
  featured = false 
}: NewsCardProps) => {
  return (
    <Card className={`overflow-hidden group hover:shadow-xl transition-all duration-300 ${featured ? 'md:col-span-2 md:row-span-2' : ''}`}>
      <Link to={`/post/${slug}`}>
        <div className="relative overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className={`w-full object-cover group-hover:scale-105 transition-transform duration-500 ${
              featured ? 'h-[400px]' : 'h-[250px]'
            }`}
          />
          <div className="absolute top-4 left-4">
            <Badge className="bg-primary text-primary-foreground font-bold uppercase">
              {category}
            </Badge>
          </div>
        </div>
        
        <div className="p-6">
          <h3 className={`font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2 ${
            featured ? 'text-2xl' : 'text-lg'
          }`}>
            {title}
          </h3>
          
          <p className="text-muted-foreground mb-4 line-clamp-2">
            {excerpt}
          </p>
          
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <User className="h-4 w-4" />
              <span>{author}</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>{new Date(date).toLocaleDateString('pt-BR')}</span>
            </div>
          </div>
        </div>
      </Link>
    </Card>
  );
};

export default NewsCard;
