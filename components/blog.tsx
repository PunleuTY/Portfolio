"use client"

import { motion } from "framer-motion"
import { CalendarIcon, ClockIcon, ArrowRightIcon, BookOpenIcon } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import Image from "next/image"

const blogPosts = [
  {
    id: 1,
    title: "Getting Started with Data Science: My Journey from Zero to Hero",
    excerpt:
      "Sharing my personal journey into data science, the challenges I faced, resources that helped me, and key lessons learned along the way.",
    content: `
# Getting Started with Data Science: My Journey from Zero to Hero

When I first decided to dive into data science, I had no idea what I was getting myself into. Coming from a different background, the world of algorithms, statistics, and programming seemed overwhelming. But here I am today, sharing my journey and hoping it helps others who are just starting out.

## The Beginning

My data science journey started with curiosity. I was fascinated by how companies like Netflix could recommend movies I'd actually want to watch, or how Google could predict what I was typing. This curiosity led me to explore what was behind these "magical" systems.

## Key Milestones

### 1. Learning Python
Python became my first programming language, and honestly, it was love at first sight. The syntax was clean, the community was welcoming, and the libraries were incredibly powerful.

### 2. Understanding Statistics
This was probably the most challenging part. Statistics isn't just about numbers; it's about understanding what those numbers mean and how to interpret them correctly.

### 3. First Project
My first real project was analyzing customer churn data. It was messy, frustrating, but incredibly rewarding when I finally got meaningful insights.

## Resources That Helped Me

- **Online Courses**: Coursera, edX, and Udacity provided structured learning paths
- **Books**: "Python for Data Analysis" by Wes McKinney was a game-changer
- **Practice**: Kaggle competitions helped me apply what I learned
- **Community**: Stack Overflow and Reddit's r/datascience were invaluable

## Lessons Learned

1. **Start with the basics**: Don't rush into complex algorithms without understanding the fundamentals
2. **Practice regularly**: Consistency beats intensity
3. **Learn by doing**: Theory is important, but hands-on projects are where real learning happens
4. **Don't be afraid to fail**: Every error is a learning opportunity

## What's Next?

I'm currently exploring machine learning engineering and MLOps. The field is constantly evolving, and that's what makes it exciting!

If you're just starting your data science journey, remember that everyone starts somewhere. Be patient with yourself, stay curious, and keep coding!
    `,
    image: "/data-science-learning-journey.png",
    tags: ["Data Science", "Learning", "Python", "Career"],
    category: "Career",
    date: "2025-01-15",
    readTime: "8 min read",
    featured: true,
  },
  {
    id: 2,
    title: "Python Libraries Every Data Scientist Should Know",
    excerpt:
      "A comprehensive guide to essential Python libraries that form the backbone of data science workflows, from data manipulation to machine learning.",
    content: `
# Python Libraries Every Data Scientist Should Know

Python's ecosystem is one of its greatest strengths, especially for data science. Here are the essential libraries that every data scientist should have in their toolkit.

## Data Manipulation and Analysis

### Pandas
The Swiss Army knife of data manipulation. If you're working with structured data, pandas is indispensable.

\`\`\`python
import pandas as pd
df = pd.read_csv('data.csv')
df.head()
\`\`\`

### NumPy
The foundation of numerical computing in Python. Most other libraries are built on top of NumPy.

## Visualization

### Matplotlib
The grandfather of Python plotting libraries. While it might seem verbose, it's incredibly powerful.

### Seaborn
Built on top of matplotlib, seaborn makes statistical visualizations beautiful and easy.

## Machine Learning

### Scikit-learn
The go-to library for machine learning in Python. It has everything from preprocessing to model evaluation.

### TensorFlow/PyTorch
For deep learning projects, these are the industry standards.

## Conclusion

These libraries form the foundation of most data science projects. Start with pandas and NumPy, then gradually add others as your projects require them.
    `,
    image: "/python-libraries-data-science.png",
    tags: ["Python", "Libraries", "Tools", "Tutorial"],
    category: "Tutorial",
    date: "2025-01-10",
    readTime: "6 min read",
    featured: true,
  },
  {
    id: 3,
    title: "Understanding SQL for Data Analysis",
    excerpt:
      "SQL remains one of the most important skills for data professionals. Learn the essential queries and concepts that will make you more effective.",
    content: `
# Understanding SQL for Data Analysis

SQL (Structured Query Language) is the backbone of data analysis. Whether you're working with small datasets or big data platforms, SQL skills are essential.

## Why SQL Matters

- **Universal**: Works across different database systems
- **Efficient**: Optimized for data retrieval and manipulation
- **Declarative**: You specify what you want, not how to get it

## Essential SQL Concepts

### Basic Queries
\`\`\`sql
SELECT column1, column2
FROM table_name
WHERE condition;
\`\`\`

### Joins
Understanding different types of joins is crucial for combining data from multiple tables.

### Aggregations
GROUP BY and aggregate functions like COUNT, SUM, AVG are your friends.

### Window Functions
Advanced but incredibly powerful for analytics.

## Best Practices

1. Always use meaningful aliases
2. Comment your complex queries
3. Use proper indentation
4. Test with small datasets first

SQL might seem intimidating at first, but with practice, it becomes second nature. Start with basic queries and gradually work your way up to more complex operations.
    `,
    image: "/sql-database-analysis.png",
    tags: ["SQL", "Database", "Analysis", "Tutorial"],
    category: "Tutorial",
    date: "2025-01-05",
    readTime: "5 min read",
    featured: false,
  },
  {
    id: 4,
    title: "Building My First Machine Learning Model",
    excerpt:
      "A detailed walkthrough of creating my first machine learning model, including data preprocessing, model selection, and evaluation.",
    content: `
# Building My First Machine Learning Model

Creating your first machine learning model is both exciting and intimidating. Here's how I approached it and what I learned along the way.

## The Problem

I decided to work on a classic problem: predicting house prices based on various features like location, size, and amenities.

## The Process

### 1. Data Collection
I used the Boston Housing dataset, which is perfect for beginners.

### 2. Exploratory Data Analysis
Understanding your data is crucial before building any model.

### 3. Data Preprocessing
- Handling missing values
- Feature scaling
- Encoding categorical variables

### 4. Model Selection
I started with linear regression and gradually tried more complex models.

### 5. Evaluation
Using metrics like RMSE and R² to evaluate model performance.

## Key Takeaways

- Start simple and gradually increase complexity
- Spend more time on data understanding and preprocessing
- Cross-validation is your friend
- Don't just focus on accuracy; understand your model's limitations

## What's Next?

I'm planning to explore ensemble methods and deep learning for my next project.

Building your first ML model is a milestone. Don't worry about making it perfect; focus on learning the process!
    `,
    image: "/machine-learning-model-building.png",
    tags: ["Machine Learning", "Python", "Tutorial", "Beginner"],
    category: "Project",
    date: "2024-12-28",
    readTime: "10 min read",
    featured: false,
  },
  {
    id: 5,
    title: "Data Visualization Best Practices",
    excerpt: "Learn how to create compelling and informative data visualizations that tell a story and drive insights.",
    content: `
# Data Visualization Best Practices

Good data visualization is both an art and a science. Here are the principles I've learned that help create compelling and informative visualizations.

## Fundamental Principles

### 1. Know Your Audience
Before creating any visualization, understand who will be viewing it and what they need to know.

### 2. Choose the Right Chart Type
- Bar charts for comparisons
- Line charts for trends over time
- Scatter plots for relationships
- Heatmaps for correlation matrices

### 3. Keep It Simple
Avoid chart junk and unnecessary decorations that don't add value.

## Color and Design

### Color Psychology
- Use color purposefully
- Ensure accessibility (colorblind-friendly palettes)
- Maintain consistency across visualizations

### Typography
- Use readable fonts
- Maintain hierarchy with font sizes
- Keep text concise

## Tools I Use

### Python Libraries
- **Matplotlib**: For basic plots and customization
- **Seaborn**: For statistical visualizations
- **Plotly**: For interactive visualizations

### Design Tools
- **Figma**: For mockups and design planning
- **Adobe Illustrator**: For final touches on publication-ready charts

## Common Mistakes to Avoid

1. **Misleading scales**: Always start bar charts at zero
2. **Too much information**: One chart, one message
3. **Poor color choices**: Avoid rainbow color schemes
4. **Missing context**: Always include titles, labels, and sources

## Conclusion

Great data visualization is about clarity, not complexity. Focus on telling a clear story with your data, and the technical aspects will follow.

Remember: if your visualization needs a long explanation, it probably needs to be redesigned!
    `,
    image: "/data-visualization-charts-graphs.png",
    tags: ["Visualization", "Design", "Python", "Best Practices"],
    category: "Tutorial",
    date: "2024-12-20",
    readTime: "7 min read",
    featured: false,
  },
]

const categories = ["All", "Tutorial", "Career", "Project", "Tools"]

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedPost, setSelectedPost] = useState<(typeof blogPosts)[0] | null>(null)
  const [showAllPosts, setShowAllPosts] = useState(false)

  const filteredPosts =
    selectedCategory === "All" ? blogPosts : blogPosts.filter((post) => post.category === selectedCategory)

  const featuredPosts = filteredPosts.filter((post) => post.featured)
  const otherPosts = filteredPosts.filter((post) => !post.featured)
  const displayedOtherPosts = showAllPosts ? otherPosts : otherPosts.slice(0, 4)

  if (selectedPost) {
    return (
      <section id="blog" className="section-padding bg-black text-white relative overflow-hidden min-h-screen">
        {/* Background Effects */}
        <div className="absolute inset-0 opacity-30">
          {[...Array(60)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-green-400 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto relative z-10 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Button
              onClick={() => setSelectedPost(null)}
              variant="ghost"
              className="mb-6 text-green-400 hover:text-green-300 hover:bg-green-400/10"
            >
              <ArrowRightIcon className="h-4 w-4 mr-2 rotate-180" />
              Back to Blog
            </Button>

            <div className="mb-8">
              <div className="flex items-center gap-4 mb-4 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <CalendarIcon className="h-4 w-4" />
                  <span>
                    {new Date(selectedPost.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <ClockIcon className="h-4 w-4" />
                  <span>{selectedPost.readTime}</span>
                </div>
                <Badge className="bg-green-500/20 text-green-400 border-green-500/30">{selectedPost.category}</Badge>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-6 font-serif text-white">{selectedPost.title}</h1>

              <div className="flex flex-wrap gap-2 mb-8">
                {selectedPost.tags.map((tag) => (
                  <Badge key={tag} className="bg-gray-800/50 text-gray-300 border border-white/10">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="aspect-video mb-8 rounded-2xl overflow-hidden">
              <Image
                src={selectedPost.image || "/placeholder.svg"}
                alt={selectedPost.title}
                width={800}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="prose prose-invert prose-lg max-w-none">
              <div className="text-gray-300 leading-relaxed space-y-6" style={{ whiteSpace: "pre-line" }}>
                {selectedPost.content}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section id="blog" className="section-padding bg-black text-white relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <BookOpenIcon className="h-8 w-8 text-green-400" />
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-green-200 to-blue-200 bg-clip-text text-transparent font-serif">
              Tech Blog
            </h2>
          </div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-serif">
            Sharing my journey, insights, and discoveries in the world of data science and technology
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setSelectedCategory(category)}
              variant={selectedCategory === category ? "default" : "outline"}
              className={`
                px-6 py-2 rounded-full transition-all duration-300 font-mono
                ${
                  selectedCategory === category
                    ? "bg-green-500 text-black hover:bg-green-400 shadow-lg shadow-green-500/30"
                    : "bg-transparent border-gray-600 text-gray-300 hover:border-green-400 hover:text-green-400"
                }
              `}
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <div className="mb-20">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl font-bold font-mono mb-8 text-center"
            >
              Featured Posts
            </motion.h3>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card className="group h-full bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl rounded-3xl overflow-hidden hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-green-500/20 cursor-pointer">
                    <div onClick={() => setSelectedPost(post)} className="h-full">
                      <div className="aspect-video overflow-hidden relative">
                        <Image
                          src={post.image || "/placeholder.svg"}
                          alt={post.title}
                          width={600}
                          height={400}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

                        <div className="absolute top-6 left-6">
                          <Badge className="bg-green-500/20 text-green-400 border-green-500/30 shadow-lg">
                            {post.category}
                          </Badge>
                        </div>

                        <div className="absolute bottom-6 left-6 right-6">
                          <div className="flex items-center gap-4 text-sm text-gray-300 mb-2">
                            <div className="flex items-center gap-1">
                              <CalendarIcon className="h-4 w-4" />
                              <span>{new Date(post.date).toLocaleDateString()}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <ClockIcon className="h-4 w-4" />
                              <span>{post.readTime}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <CardContent className="p-8">
                        <h4 className="text-2xl font-bold mb-4 group-hover:text-green-400 transition-colors duration-300 font-serif">
                          {post.title}
                        </h4>

                        <p className="text-gray-400 mb-6 leading-relaxed">{post.excerpt}</p>

                        <div className="flex flex-wrap gap-2 mb-6">
                          {post.tags.slice(0, 3).map((tag) => (
                            <Badge key={tag} className="bg-gray-800/50 text-gray-300 border border-white/10 text-xs">
                              {tag}
                            </Badge>
                          ))}
                          {post.tags.length > 3 && (
                            <Badge className="bg-gray-800/50 text-gray-300 border border-white/10 text-xs">
                              +{post.tags.length - 3}
                            </Badge>
                          )}
                        </div>

                        <div className="flex items-center justify-between">
                          <Button
                            variant="ghost"
                            className="text-green-400 hover:text-green-300 hover:bg-green-400/10 p-0"
                          >
                            Read More
                            <ArrowRightIcon className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                          </Button>
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Other Posts */}
        {otherPosts.length > 0 && (
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl font-bold font-mono mb-8 text-center"
            >
              Recent Posts
            </motion.h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {displayedOtherPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="group h-full bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl rounded-2xl overflow-hidden hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 cursor-pointer">
                    <div onClick={() => setSelectedPost(post)} className="h-full">
                      <div className="aspect-video overflow-hidden relative">
                        <Image
                          src={post.image || "/placeholder.svg"}
                          alt={post.title}
                          width={400}
                          height={300}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

                        <div className="absolute top-4 left-4">
                          <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30 text-xs">
                            {post.category}
                          </Badge>
                        </div>
                      </div>

                      <CardContent className="p-6">
                        <div className="flex items-center gap-4 text-xs text-gray-400 mb-3">
                          <div className="flex items-center gap-1">
                            <CalendarIcon className="h-3 w-3" />
                            <span>{new Date(post.date).toLocaleDateString()}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <ClockIcon className="h-3 w-3" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>

                        <h4 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors duration-300 font-serif line-clamp-2">
                          {post.title}
                        </h4>

                        <p className="text-gray-400 mb-4 text-sm leading-relaxed line-clamp-3">{post.excerpt}</p>

                        <div className="flex flex-wrap gap-1 mb-4">
                          {post.tags.slice(0, 2).map((tag) => (
                            <Badge
                              key={tag}
                              className="bg-gray-800/50 text-gray-400 text-xs px-2 py-1 border border-white/10"
                            >
                              {tag}
                            </Badge>
                          ))}
                          {post.tags.length > 2 && (
                            <Badge className="bg-gray-800/50 text-gray-400 text-xs px-2 py-1 border border-white/10">
                              +{post.tags.length - 2}
                            </Badge>
                          )}
                        </div>

                        <Button
                          variant="ghost"
                          className="text-blue-400 hover:text-blue-300 hover:bg-blue-400/10 p-0 text-sm"
                        >
                          Read More
                          <ArrowRightIcon className="h-3 w-3 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                        </Button>
                      </CardContent>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Show More Button */}
            {otherPosts.length > 4 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center mt-12"
              >
                <Button
                  onClick={() => setShowAllPosts(!showAllPosts)}
                  className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 transition-all duration-300 px-8 py-3 text-lg font-medium shadow-lg hover:shadow-xl hover:scale-105 rounded-3xl"
                >
                  {showAllPosts ? "Show Less Posts" : `Show More Posts (${otherPosts.length - 4} more)`}
                  <ArrowRightIcon
                    className={`h-5 w-5 ml-2 transition-transform duration-300 ${showAllPosts ? "rotate-180" : ""}`}
                  />
                </Button>
              </motion.div>
            )}
          </div>
        )}

        {/* Empty State */}
        {filteredPosts.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center py-16"
          >
            <BookOpenIcon className="h-16 w-16 text-gray-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-400 mb-2">No posts found</h3>
            <p className="text-gray-500">Try selecting a different category or check back later for new content.</p>
          </motion.div>
        )}
      </div>
    </section>
  )
}
