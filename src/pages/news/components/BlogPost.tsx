import React from 'react';
import { Container, Image } from 'react-bootstrap';
import "./NewsCard.css"

interface BlogPostProps {
  title: string;
  imageUrl: string;
  content: string[];
}

const BlogPost: React.FC<BlogPostProps> = ({ title, imageUrl, content }) => {
  return (
    <Container style={{ padding: '20px', maxWidth: '800px', margin: 'auto' }}>
      <article>
        <h2 className='text-dark post-header my-3 text-start'>{title}</h2>
        <Image src={imageUrl} alt={title} className="article-image" fluid />
        <div className="article-content text-dark" style={{ textAlign: 'justify' }}>
          {content && content.map((post)=>(
          <p className='text-dark textMediumSize text-start my-3'>{post}</p>
          ))}
        </div>
      </article>
    </Container>
  );
};

export default BlogPost;
