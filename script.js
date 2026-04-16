// Course data
const courses = {
    sql: {
        title: "SQL Database Course",
        content: `
            <p>Master SQL from basics to advanced concepts!</p>
            <h3>What You'll Learn:</h3>
            <ul>
                <li>Database Fundamentals</li>
                <li>SQL Queries & Commands</li>
                <li>Data Manipulation</li>
                <li>Database Design</li>
            </ul>
            <p>Topics: <button onclick="showTopic('basics')">Basics</button> <button onclick="showTopic('queries')">Queries</button> <button onclick="showTopic('design')">Design</button></p>
            <div id="topic-content"></div>
        `
    },
    postgres: {
        title: "PostgreSQL Advanced Course",
        content: `
            <p>Become a PostgreSQL expert!</p>
            <h3>Course Content:</h3>
            <ul>
                <li>PostgreSQL Installation & Setup</li>
                <li>Advanced SQL Features</li>
                <li>Performance Optimization</li>
                <li>Database Administration</li>
            </ul>
            <p>Topics: <button onclick="showTopic('setup')">Setup</button> <button onclick="showTopic('advanced')">Advanced</button> <button onclick="showTopic('admin')">Admin</button></p>
            <div id="topic-content"></div>
        `
    },
    ai: {
        title: "Artificial Intelligence Course",
        content: `
            <p>Explore the world of AI!</p>
            <h3>Covered Topics:</h3>
            <ul>
                <li>AI Fundamentals</li>
                <li>Neural Networks</li>
                <li>Natural Language Processing</li>
                <li>Computer Vision</li>
            </ul>
            <p>Topics: <button onclick="showTopic('fundamentals')">Fundamentals</button> <button onclick="showTopic('neural')">Neural Networks</button> <button onclick="showTopic('nlp')">NLP</button></p>
            <div id="topic-content"></div>
        `
    },
    ml: {
        title: "Machine Learning Course",
        content: `
            <p>Hands-on Machine Learning!</p>
            <h3>Learning Path:</h3>
            <ul>
                <li>Python for Data Science</li>
                <li>Supervised Learning</li>
                <li>Unsupervised Learning</li>
                <li>Model Deployment</li>
            </ul>
            <p>Topics: <button onclick="showTopic('python')">Python</button> <button onclick="showTopic('supervised')">Supervised</button> <button onclick="showTopic('deployment')">Deployment</button></p>
            <div id="topic-content"></div>
        `
    },
    java: {
        title: "Java Programming Course",
        content: `
            <p>Complete Java mastery!</p>
            <h3>Course Structure:</h3>
            <ul>
                <li>Java Fundamentals</li>
                <li>Object-Oriented Programming</li>
                <li>Advanced Java</li>
                <li>Web Development with Java</li>
            </ul>
            <p>Topics: <button onclick="showTopic('fundamentals')">Fundamentals</button> <button onclick="showTopic('oop')">OOP</button> <button onclick="showTopic('web')">Web Dev</button></p>
            <div id="topic-content"></div>
        `
    },
    python: {
        title: "Python Programming Course",
        content: `
            <p>Python for everyone!</p>
            <h3>What You'll Build:</h3>
            <ul>
                <li>Python Basics</li>
                <li>Data Structures & Algorithms</li>
                <li>Web Applications</li>
                <li>Automation Scripts</li>
            </ul>
            <p>Topics: <button onclick="showTopic('basics')">Basics</button> <button onclick="showTopic('data')">Data Structures</button> <button onclick="showTopic('web')">Web Apps</button></p>
            <div id="topic-content"></div>
        `
    }
};

// Function to show course details
function showCourse(courseKey) {
    const course = courses[courseKey];
    document.getElementById('course-title').textContent = course.title;
    document.getElementById('course-content').innerHTML = course.content;
    document.getElementById('courses').style.display = 'none';
    document.getElementById('course-details').style.display = 'block';
}

// Function to show topic content
function showTopic(topic) {
    const topics = {
        basics: "<p>SQL Basics: Learn SELECT, INSERT, UPDATE, DELETE statements and basic database operations.</p><p>Example: SELECT * FROM users WHERE age > 18;</p>",
        queries: "<p>Advanced Queries: JOINs, subqueries, aggregations, and complex SQL operations.</p><p>Example: SELECT u.name, COUNT(o.id) FROM users u LEFT JOIN orders o ON u.id = o.user_id GROUP BY u.id;</p>",
        design: "<p>Database Design: Normalization, relationships, indexes, and optimization techniques.</p><p>Key concepts: Primary keys, foreign keys, and data integrity.</p>",
        setup: "<p>PostgreSQL Setup: Installation, configuration, and basic administration.</p><p>Commands: CREATE DATABASE, CREATE USER, GRANT permissions.</p>",
        advanced: "<p>Advanced Features: JSON support, full-text search, window functions, and extensions.</p><p>Example: SELECT json_column->>'name' FROM table_name;</p>",
        admin: "<p>Database Administration: Backup, recovery, monitoring, and performance tuning.</p><p>Tools: pg_dump, pg_restore, EXPLAIN ANALYZE.</p>",
        fundamentals: "<p>AI Fundamentals: What is AI? History, types, and current applications.</p><p>Key areas: Machine Learning, Deep Learning, Expert Systems.</p>",
        neural: "<p>Neural Networks: Architecture, training, backpropagation, and activation functions.</p><p>Types: Feedforward, Convolutional, Recurrent networks.</p>",
        nlp: "<p>Natural Language Processing: Text processing, sentiment analysis, language models.</p><p>Technologies: BERT, GPT, spaCy, NLTK.</p>",
        python: "<p>Python for ML: NumPy, Pandas, Matplotlib, Scikit-learn basics.</p><p>Example: import pandas as pd; df = pd.read_csv('data.csv')</p>",
        supervised: "<p>Supervised Learning: Regression, classification algorithms.</p><p>Algorithms: Linear Regression, Decision Trees, SVM, Neural Networks.</p>",
        deployment: "<p>Model Deployment: Flask/Django APIs, cloud deployment, monitoring.</p><p>Tools: Docker, Kubernetes, AWS SageMaker.</p>",
        fundamentals: "<p>Java Fundamentals: Variables, data types, control structures, methods.</p><p>Syntax: public static void main(String[] args) { }</p>",
        oop: "<p>Object-Oriented Programming: Classes, objects, inheritance, polymorphism.</p><p>Principles: Encapsulation, Abstraction, Inheritance, Polymorphism.</p>",
        web: "<p>Java Web Development: Servlets, JSP, Spring Framework, REST APIs.</p><p>Frameworks: Spring Boot, Hibernate, Maven.</p>",
        basics: "<p>Python Basics: Variables, loops, functions, file handling.</p><p>Syntax: def hello(): print('Hello World')</p>",
        data: "<p>Data Structures: Lists, tuples, dictionaries, sets, algorithms.</p><p>Example: my_list = [1, 2, 3]; my_dict = {'key': 'value'}</p>",
        web: "<p>Web Development: Flask/Django, HTML templates, databases.</p><p>Example: from flask import Flask; app = Flask(__name__)</p>"
    };
    document.getElementById('topic-content').innerHTML = topics[topic] || "<p>Topic content coming soon!</p>";
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    // View course buttons
    document.querySelectorAll('.view-course').forEach(button => {
        button.addEventListener('click', function() {
            const courseKey = this.parentElement.getAttribute('data-course');
            showCourse(courseKey);
        });
    });

    // Back button
    document.getElementById('back-btn').addEventListener('click', function() {
        document.getElementById('course-details').style.display = 'none';
        document.getElementById('courses').style.display = 'block';
    });

    // Enroll button
    document.getElementById('enrollBtn').addEventListener('click', function() {
        alert('Thank you for your interest! Enrollment feature coming soon.');
    });

    // Contact form
    document.getElementById('contact-form').addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        alert(`Thank you ${name}! Your message has been sent.`);
        this.reset();
    });

    // Modal functionality
    const loginModal = document.getElementById('loginModal');
    const registerModal = document.getElementById('registerModal');
    const loginBtn = document.getElementById('loginBtn');
    const registerBtn = document.getElementById('registerBtn');
    const closeBtns = document.getElementsByClassName('close');

    loginBtn.onclick = function() {
        loginModal.style.display = 'block';
    }

    registerBtn.onclick = function() {
        registerModal.style.display = 'block';
    }

    for (let closeBtn of closeBtns) {
        closeBtn.onclick = function() {
            loginModal.style.display = 'none';
            registerModal.style.display = 'none';
        }
    }

    window.onclick = function(event) {
        if (event.target == loginModal) {
            loginModal.style.display = 'none';
        }
        if (event.target == registerModal) {
            registerModal.style.display = 'none';
        }
    }

    // Login form
    document.getElementById('loginForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;
        
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find(u => u.email === email && u.password === password);
        
        if (user) {
            localStorage.setItem('currentUser', JSON.stringify(user));
            showDashboard(user.name);
            loginModal.style.display = 'none';
            alert('Login successful!');
        } else {
            alert('Invalid email or password');
        }
        
        this.reset();
    });

    // Register form
    document.getElementById('registerForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('regName').value;
        const email = document.getElementById('regEmail').value;
        const password = document.getElementById('regPassword').value;
        const confirmPassword = document.getElementById('regConfirmPassword').value;
        
        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }
        
        const users = JSON.parse(localStorage.getItem('users')) || [];
        if (users.find(u => u.email === email)) {
            alert('Email already registered');
            return;
        }
        
        const newUser = { name, email, password };
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));
        
        alert('Registration successful! Please login.');
        registerModal.style.display = 'none';
        this.reset();
    });

    // Logout
    document.getElementById('logoutBtn').addEventListener('click', function() {
        localStorage.removeItem('currentUser');
        document.getElementById('dashboard').style.display = 'none';
        alert('Logged out successfully!');
    });

    // Check if user is already logged in
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser) {
        showDashboard(currentUser.name);
    }
});

// Function to show dashboard
function showDashboard(name) {
    document.getElementById('userName').textContent = name;
    document.getElementById('dashboard').style.display = 'block';
}