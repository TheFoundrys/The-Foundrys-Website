export const aiCurriculum = {
    duration: "3 Years (6 Semesters)",
    years: [
        {
            title: "YEAR 1: FOUNDATION PHASE",
            subtitle: "\"The Builder\"",
            goal: "Build the bedrock. We assume zero prior coding knowledge. By the end of this year, the student is a competent Junior AI Engineer.",
            semesters: [
                {
                    id: "sem1",
                    title: "Semester 1: The Coding Bootcamp",
                    theme: "Logic, Syntax, and The Art of Programming",
                    modules: [
                        {
                            category: "Discipline Specific Modules (Core Tech)",
                            items: [
                                "Programming Fundamentals: Logic building, Flowcharts, and Python Syntax",
                                "Mathematics for AI - I: Pre-Calculus, Coordinate Geometry, and Basic Linear Algebra (Vectors)",
                                "Computer Fundamentals: How RAM/CPU works, Binary Arithmetic, and Operating Systems basics",
                                "Web Basics: HTML5, CSS3, and Building a Personal Portfolio Website",
                                "Database Introduction: SQL Basics (Select, Insert, Update) with SQLite"
                            ]
                        },
                        {
                            category: "Value Added Module (Mindset)",
                            items: [
                                "Critical Thinking: Problem decomposition (How to break a big problem into small steps)",
                                "The Tech Landscape: History of Silicon Valley and AI"
                            ]
                        },
                        {
                            category: "Ability Enhancement Module (Tools)",
                            items: [
                                "The Terminal: Basic Linux Commands (cd, ls, grep)",
                                "Version Control: Git & GitHub (Commits, Push/Pull)"
                            ]
                        }
                    ],
                    project: {
                        title: "Project 1: \"The Classic Arcade\"",
                        task: "Build a fully functional game (like Snake or Tic-Tac-Toe) in Python.",
                        outcome: "Mastery of loops, conditionals, and game logic."
                    }
                },
                {
                    id: "sem2",
                    title: "Semester 2: The Junior AI Engineer",
                    theme: "Data Intelligence & First Models",
                    modules: [
                        {
                            category: "Discipline Specific Modules",
                            items: [
                                "Advanced Python: Object Oriented Programming (Classes, Inheritance)",
                                "Data Handling: NumPy & Pandas (Dataframes, cleaning techniques)",
                                "Mathematics for AI - II: Probability Basics (Distributions, Mean/Median/Mode)",
                                "Introduction to Machine Learning: Scikit-Learn basics, Linear Regression, and KNN",
                                "Data Visualization: Matplotlib and Streamlit"
                            ]
                        },
                        {
                            category: "Value Added Module",
                            items: [
                                "Data Ethics: Privacy, Bias in Data, and GDPR"
                            ]
                        },
                        {
                            category: "Ability Enhancement Module",
                            items: [
                                "Virtual Environments: Managing dependencies with Conda/Venv",
                                "Debugging: Using breakpoints and IDE tools (VS Code)"
                            ]
                        }
                    ],
                    project: {
                        title: "Project 2: \"Moneyball Predictor\"",
                        task: "Scrape real-time stock or sports data, visualize trends, and train a basic model to predict the next outcome.",
                        outcome: "The complete pipeline: Data -> Clean -> Train -> Predict."
                    }
                }
            ]
        },
        {
            title: "YEAR 2: GROWTH PHASE",
            subtitle: "\"The Engineer\"",
            goal: "Deep dive into Intelligence. Transitioning from \"Junior AI Engineer\" to \"Deep Learning Specialist.\"",
            semesters: [
                {
                    id: "sem3",
                    title: "Semester 3: The Predictive Modeler",
                    theme: "Classical Machine Learning & Cloud",
                    modules: [
                        {
                            category: "Discipline Specific Modules",
                            items: [
                                "Supervised Learning Deep Dive: Decision Trees, Random Forests, SVMs, XGBoost",
                                "Unsupervised Learning: Clustering (K-Means) and Dimensionality Reduction (PCA)",
                                "Mathematics for AI - III: Calculus (Derivatives, Gradients) & Optimization",
                                "Cloud Computing: AWS/GCP Foundations (EC2, S3, Lambda)",
                                "SQL Mastery: Advanced Joins, Indexing, and Database Design"
                            ]
                        },
                        {
                            category: "Value Added Module",
                            items: [
                                "Business Intelligence: How AI solves actual business problems (Churn prediction)"
                            ]
                        },
                        {
                            category: "Ability Enhancement Module",
                            items: [
                                "Docker Fundamentals: Containerizing applications"
                            ]
                        }
                    ],
                    project: {
                        title: "Project 3: \"Dynamic Pricing API\"",
                        task: "Train a model to predict house/taxi prices and deploy it as a Dockerized API on the cloud.",
                        outcome: "End-to-end ML lifecycle (Train -> Save -> Serve)."
                    }
                },
                {
                    id: "sem4",
                    title: "Semester 4: The Deep Learning Visionary",
                    theme: "Neural Networks & Computer Vision",
                    modules: [
                        {
                            category: "Discipline Specific Modules",
                            items: [
                                "Deep Learning Foundations: Perceptrons, Backpropagation, Loss Functions",
                                "PyTorch Mastery: Tensors, Autograd, and Building Custom Layers",
                                "Computer Vision: CNNs (ResNet, VGG), Object Detection (YOLO)",
                                "Hardware for AI: Introduction to GPUs and CUDA concepts",
                                "Video Processing: OpenCV and real-time streams"
                            ]
                        },
                        {
                            category: "Value Added Module",
                            items: [
                                "Reading Research: How to read Arxiv papers (The \"Attention is All You Need\" breakdown)"
                            ]
                        },
                        {
                            category: "Ability Enhancement Module",
                            items: [
                                "Experiment Tracking: Using Weights & Biases (WandB)"
                            ]
                        }
                    ],
                    project: {
                        title: "Project 4: \"FaceID System\"",
                        task: "Build a real-time attendance system using facial recognition.",
                        outcome: "Building and debugging Deep Neural Networks."
                    }
                }
            ]
        },
        {
            title: "YEAR 3: SCALE PHASE",
            subtitle: "\"The Architect\"",
            goal: "Enterprise Grade Engineering & Novel Research. Masters Level intensity.",
            semesters: [
                {
                    id: "sem5",
                    title: "Semester 5: The Large Model Engineer (GenAI)",
                    theme: "LLMs, Transformers & Distributed Systems",
                    modules: [
                        {
                            category: "Discipline Specific Modules",
                            items: [
                                "Transformer Architecture: Multi-Head Attention, Positional Encodings (BERT/GPT)",
                                "LLM Engineering: Fine-tuning (LoRA), Prompt Engineering, and RAG",
                                "Distributed Systems (Masters Level): Data Parallelism, Sharding, CAP Theorem",
                                "Vector Databases: Pinecone/Milvus and Semantic Search",
                                "Graph Neural Networks: Introduction to Graph data"
                            ]
                        }
                    ],
                    project: {
                        title: "Project 5: \"Mini-Llama\" (Pre-training)",
                        task: "Pre-train a small Language Model (e.g., 20M parameters) on a specific dataset from scratch.",
                        outcome: "Understanding the \"internals\" of ChatGPT, not just using the API."
                    }
                },
                {
                    id: "sem6",
                    title: "Semester 6: The Capstone (Research & MLOps)",
                    theme: "Contribution to the Field",
                    modules: [
                        {
                            category: "Discipline Specific Modules",
                            items: [
                                "MLOps at Scale: Kubernetes (K8s) for ML, CI/CD Pipelines",
                                "Advanced Research: Writing LaTeX papers, Structuring experiments",
                                "AI Safety: RLHF (Reinforcement Learning from Human Feedback)"
                            ]
                        }
                    ],
                    project: {
                        title: "Project 6: \"The Capstone\"",
                        task: "Track A: Startup Launch (B2B AI SaaS) OR Track B: Research Thesis (Novel Architecture)",
                        outcome: "Production-grade deployment or published research."
                    }
                }
            ]
        }
    ]
};
