import Layout from '@/components/Layout'
import Link from 'next/link'
import { Calendar, Clock, ArrowLeft, Tag } from 'lucide-react'
import { notFound } from 'next/navigation'

// This would normally come from MDX files, but for now we'll use static data
const blogPosts = {
  'building-scalable-microservices': {
    title: 'Building Scalable Microservices: Lessons from Production',
    excerpt: 'A deep dive into the challenges and solutions we encountered while scaling our microservices architecture to handle millions of requests per day.',
    category: 'Engineering/Tech',
    date: '2023-12-15',
    readTime: '8 min read',
    tags: ['Microservices', 'Architecture', 'Scalability', 'Production'],
    content: `
# Building Scalable Microservices: Lessons from Production

When we first started building our microservices architecture, we had a clear vision: create a system that could scale horizontally, handle millions of requests per day, and maintain high availability. What we didn't anticipate were the real-world challenges that would test our assumptions and force us to rethink our approach.

## The Initial Architecture

Our first iteration was straightforward - we split our monolithic application into logical services:

- **User Service**: Handles authentication and user management
- **Content Service**: Manages content creation and retrieval
- **Recommendation Service**: Provides personalized recommendations
- **Analytics Service**: Tracks user behavior and metrics

Each service had its own database, API, and deployment pipeline. We used Docker containers and Kubernetes for orchestration.

## Challenges We Encountered

### 1. Service Discovery and Load Balancing

Initially, we used a simple round-robin load balancer. This worked fine for development, but in production, we quickly realized that different services had varying performance characteristics.

\`\`\`javascript
// Example of our initial service discovery
const serviceRegistry = {
  'user-service': ['10.0.1.1:3000', '10.0.1.2:3000'],
  'content-service': ['10.0.2.1:3000', '10.0.2.2:3000']
};
\`\`\`

We implemented a more sophisticated service mesh using Istio, which provided:
- Automatic load balancing based on service health
- Circuit breaking for failing services
- Distributed tracing for debugging

### 2. Data Consistency Across Services

One of our biggest challenges was maintaining data consistency across services. We initially tried to use distributed transactions, but this created performance bottlenecks.

**Solution**: We adopted an event-driven architecture using Apache Kafka:

\`\`\`python
# Example event producer
class UserService:
    def create_user(self, user_data):
        user = self.repository.create(user_data)
        
        # Publish event
        self.event_bus.publish('user.created', {
            'user_id': user.id,
            'email': user.email,
            'created_at': user.created_at
        })
        
        return user
\`\`\`

### 3. Monitoring and Observability

With multiple services, traditional logging became insufficient. We implemented:

- **Distributed Tracing**: Using Jaeger to trace requests across services
- **Centralized Logging**: Aggregating logs from all services
- **Metrics Collection**: Using Prometheus and Grafana for monitoring

## Performance Optimizations

### Database Sharding

As our user base grew, we needed to scale our databases horizontally:

\`\`\`sql
-- Example sharding strategy
CREATE TABLE users_0 (id BIGINT PRIMARY KEY, ...);
CREATE TABLE users_1 (id BIGINT PRIMARY KEY, ...);
-- ... more shards
\`\`\`

### Caching Strategy

We implemented a multi-layer caching strategy:

1. **Application-level caching** using Redis
2. **CDN caching** for static content
3. **Database query caching** for frequently accessed data

## Lessons Learned

1. **Start Simple**: Don't over-engineer from the beginning
2. **Monitor Everything**: You can't optimize what you can't measure
3. **Plan for Failure**: Design your system to handle service failures gracefully
4. **Documentation is Key**: With multiple teams working on different services, good documentation is essential

## Current Architecture

Today, our system handles over 10 million requests per day with 99.9% uptime. We've learned that microservices aren't just about splitting code - they're about creating a culture of independent, autonomous teams that can move fast and break things safely.

The journey from monolith to microservices taught us that architecture is as much about people and processes as it is about technology. The right tools and patterns are important, but building a team that understands distributed systems is even more crucial.

---

*This post is part of our series on production engineering. Check out our other posts on [monitoring](/blog/monitoring-distributed-systems) and [deployment strategies](/blog/zero-downtime-deployments).*
    `
  },
  'creative-coding-generative-art': {
    title: 'Creative Coding: From Algorithms to Art',
    excerpt: 'Exploring the intersection of mathematics, programming, and visual art through generative algorithms and real-time rendering techniques.',
    category: 'Creative/Videography',
    date: '2023-11-28',
    readTime: '12 min read',
    tags: ['Creative Coding', 'Generative Art', 'WebGL', 'JavaScript'],
    content: `
# Creative Coding: From Algorithms to Art

Creative coding represents the beautiful intersection where mathematics, programming, and visual art converge. It's about using code as a medium for artistic expression, creating dynamic, interactive, and generative artworks that would be impossible to create by hand.

## The Foundation: Mathematics Meets Code

At the heart of creative coding lies mathematics. From fractals to particle systems, mathematical concepts provide the building blocks for visual expression.

### Fractal Generation

Fractals are perfect examples of how simple mathematical rules can create infinitely complex patterns:

\`\`\`javascript
function drawMandelbrot(canvas, maxIterations = 100) {
  const ctx = canvas.getContext('2d');
  const width = canvas.width;
  const height = canvas.height;
  
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      const a = (x - width / 2) * 4 / width;
      const b = (y - height / 2) * 4 / height;
      
      let ca = a;
      let cb = b;
      let n = 0;
      
      while (n < maxIterations) {
        const aa = ca * ca - cb * cb;
        const bb = 2 * ca * cb;
        
        ca = aa + a;
        cb = bb + b;
        
        if (ca * ca + cb * cb > 16) break;
        n++;
      }
      
      const brightness = n / maxIterations;
      ctx.fillStyle = \`hsl(\${brightness * 360}, 50%, 50%)\`;
      ctx.fillRect(x, y, 1, 1);
    }
  }
}
\`\`\`

## Real-Time Rendering with WebGL

Modern creative coding leverages the power of GPU acceleration through WebGL for real-time performance:

\`\`\`javascript
// Vertex shader for animated particles
const vertexShader = \`
  attribute vec3 position;
  attribute vec3 velocity;
  uniform float time;
  
  void main() {
    vec3 pos = position + velocity * time;
    gl_Position = vec4(pos, 1.0);
    gl_PointSize = 2.0;
  }
\`;

// Fragment shader for particle rendering
const fragmentShader = \`
  void main() {
    float dist = length(gl_PointCoord - vec2(0.5));
    if (dist > 0.5) discard;
    gl_FragColor = vec4(1.0, 0.5, 0.2, 1.0 - dist * 2.0);
  }
\`;
\`\`\`

## Interactive Art Installations

Creative coding isn't just about static images - it's about creating interactive experiences that respond to user input:

\`\`\`javascript
class InteractiveParticleSystem {
  constructor(canvas) {
    this.canvas = canvas;
    this.particles = [];
    this.mouse = { x: 0, y: 0 };
    
    this.setupEventListeners();
    this.animate();
  }
  
  setupEventListeners() {
    this.canvas.addEventListener('mousemove', (e) => {
      this.mouse.x = e.clientX;
      this.mouse.y = e.clientY;
    });
  }
  
  animate() {
    // Update particle positions based on mouse
    this.particles.forEach(particle => {
      const dx = this.mouse.x - particle.x;
      const dy = this.mouse.y - particle.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      if (distance < 100) {
        const force = (100 - distance) / 100;
        particle.vx += (dx / distance) * force * 0.1;
        particle.vy += (dy / distance) * force * 0.1;
      }
      
      particle.x += particle.vx;
      particle.y += particle.vy;
      particle.vx *= 0.99;
      particle.vy *= 0.99;
    });
    
    this.draw();
    requestAnimationFrame(() => this.animate());
  }
}
\`\`\`

## The Creative Process

Creative coding follows a unique workflow:

1. **Conceptualization**: Start with a visual idea or mathematical concept
2. **Prototyping**: Quick sketches in code to explore the idea
3. **Iteration**: Refine and optimize the algorithm
4. **Integration**: Combine multiple techniques for complex effects
5. **Performance**: Optimize for real-time rendering

## Tools and Frameworks

The creative coding ecosystem is rich with tools:

- **p5.js**: Beginner-friendly library for creative coding
- **Three.js**: 3D graphics and WebGL abstraction
- **Processing**: Java-based creative coding environment
- **OpenFrameworks**: C++ framework for creative applications
- **TouchDesigner**: Visual programming for real-time media

## The Future of Creative Coding

As technology evolves, creative coding is expanding into new domains:

- **Machine Learning**: Using neural networks for generative art
- **Virtual Reality**: Creating immersive artistic experiences
- **Real-time Collaboration**: Multi-user creative coding environments
- **AI-Assisted Creation**: Tools that help artists explore new possibilities

## Conclusion

Creative coding represents a new form of artistic expression that's uniquely suited to our digital age. It combines the precision of mathematics with the creativity of art, all powered by the flexibility of code.

The beauty of creative coding lies not just in the final output, but in the process of discovery and experimentation. Every line of code is a brushstroke, every algorithm a new technique, and every bug an opportunity for unexpected beauty.

---

*Explore more creative coding projects on my [GitHub](https://github.com/maxcomfere/creative-coding) or watch my [YouTube tutorials](https://youtube.com/@maxcomfere).*
    `
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug as keyof typeof blogPosts]
  
  if (!post) {
    notFound()
  }

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back to Blog */}
        <div className="mb-8">
          <Link 
            href="/blog" 
            className="inline-flex items-center space-x-2 text-gray-600 hover:text-black transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Blog</span>
          </Link>
        </div>

        {/* Article Header */}
        <header className="mb-12">
          <div className="flex items-center space-x-3 mb-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
              {post.category}
            </span>
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <div className="flex items-center space-x-1">
                <Calendar className="h-4 w-4" />
                <span>{new Date(post.date).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="h-4 w-4" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            {post.title}
          </h1>
          
          <p className="text-xl text-gray-600 mb-6 leading-relaxed">
            {post.excerpt}
          </p>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800"
              >
                <Tag className="h-3 w-3 mr-1" />
                {tag}
              </span>
            ))}
          </div>
        </header>

        {/* Article Content */}
        <article className="prose prose-lg max-w-none">
          <div 
            className="leading-relaxed text-gray-700"
            dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br>') }}
          />
        </article>

        {/* Article Footer */}
        <footer className="mt-16 pt-8 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
            <div className="text-sm text-gray-500">
              Written by Maximilian Comfere
            </div>
            <div className="flex space-x-4">
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://maxcomfere.com/blog/${params.slug}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-black transition-colors"
              >
                Share on Twitter
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://maxcomfere.com/blog/${params.slug}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-black transition-colors"
              >
                Share on LinkedIn
              </a>
            </div>
          </div>
        </footer>
      </div>
    </Layout>
  )
} 