body {
    font-family: 'Poppins', sans-serif;
    margin: 0;
    padding: 0;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: #333;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}

.navbar {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    padding: 20px;
    text-align: center;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 10;
}

.navbar h2 {
    margin: 0;
    color: white;
    font-weight: 600;
}

.section {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 80px 20px 20px;
}

.hero {
    text-align: center;
    max-width: 800px;
    margin-bottom: 50px;
}

.hero h1 {
    font-size: 3em;
    color: white;
    margin-bottom: 20px;
    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}

.hero p {
    font-size: 1.2em;
    color: rgba(255, 255, 255, 0.9);
    margin-bottom: 30px;
}

.features {
    display: flex;
    justify-content: space-around;
    max-width: 1000px;
    width: 100%;
    margin-top: 50px;
}

.feature-card {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border-radius: 15px;
    padding: 30px;
    text-align: center;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s;
    color: white;
    flex: 1;
    margin: 0 10px;
}

.feature-card:hover {
    transform: translateY(-5px);
}

.feature-card i {
    font-size: 3em;
    margin-bottom: 15px;
}

.feature-card h3 {
    font-size: 1.5em;
    margin-bottom: 10px;
}

.card {
    background: white;
    border-radius: 15px;
    padding: 40px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    max-width: 400px;
    width: 100%;
    text-align: center;
    animation: fadeIn 0.5s ease-in;
}

@keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
}

.input-group {
    position: relative;
    margin: 20px 0;
}

.input-group i {
    position: absolute;
    left: 15px;
    top: 50%;
    transform: translateY(-50%);
    color: #aaa;
}

input {
    width: 100%;
    padding: 15px 15px 15px 45px;
    border: 2px solid #e0e0e0;
    border-radius: 10px;
    font-size: 16px;
    transition: border-color 0.3s;
}

input:focus {
    border-color: #667eea;
    outline: none;
}

.btn-primary, .btn-secondary {
    padding: 15px 30px;
    border: none;
    border-radius: 10px;
    font-size: 16px;
    cursor: pointer;
    transition: all 0.3s;
    margin: 10px;
    font-weight: 600;
}

.btn-primary {
    background: linear-gradient(135deg, #667eea, #764ba2);
    color: white;
}

.btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.btn-secondary {
    background: #f8f9fa;
    color: #333;
    border: 2px solid #e0e0e0;
}

.btn-secondary:hover {
    background: #e0e0e0;
}

.forgot-link {
    display: block;
    margin-top: 15px;
    color: #667eea;
    text-decoration: none;
    font-size: 14px;
}

.forgot-link:hover {
    text-decoration: underline;
}

.container {
    max-width: 1200px;
    width: 100%;
    text-align: center;
}

.video-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    margin: 30px 0;
}

.video-card {
    background: white;
    border-radius: 15px;
    padding: 20px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s;
    cursor: pointer;
}

.video-card:hover {
    transform: translateY(-5px);
}

.video-thumb {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 10px;
    transition: transform 0.3s;
}

.video-thumb:hover {
    transform: scale(1.05);
}

.video-description {
    font-size: 0.9em;
    color: #666;
    margin-top: 10px;
}

.modal {
    display: none;
    position: fixed;
    z-index: 1000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    justify-content: center;
    align-items: center;
}

.modal-content {
    background: white;
    padding: 20px;
    border-radius: 10px;
    max-width: 800px;
    width: 90%;
    position: relative;
}

.close-btn {
    position: absolute;
    top: 10px;
    right: 15px;
    font-size: 30px;
    cursor: pointer;
    color: #333;
}

.close-btn:hover {
    color: #000;
}

#modal-video {
    border-radius: 10px;
}

.related-videos {
    margin-top: 20px;
}

.related-videos h3 {
    font-size: 1.2em;
    margin-bottom: 10px;
    color: #333;
}

.related-list {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.related-item {
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 10px;
    border-radius: 8px;
    transition: background 0.2s;
}

.related-item:hover {
    background: #f0f0f0;
}

.related-item img {
    width: 120px;
    height: 70px;
    object-fit: cover;
    border-radius: 5px;
    margin-right: 10px;
}

.related-info h4 {
    font-size: 0.9em;
    margin: 0 0 5px 0;
    color: #333;
}

.related-info p {
    font-size: 0.8em;
    color: #666;
    margin: 0;
}

footer {
    background: rgba(0, 0, 0, 0.1);
    color: white;
    text-align: center;
    padding: 20px;
    margin-top: auto;
}

footer a {
    color: #667eea;
    text-decoration: none;
}

footer a:hover {
    text-decoration: underline;
}

/* Mobile responsiveness */
@media (max-width: 768px) {
    .hero h1 { font-size: 2em; }
    .features { flex-direction: column; }
    .feature-card { margin: 10px 0; }
    .card { padding: 20px; }
    h1 { font-size: 2em; }
    .video-grid { grid-template-columns: 1fr; }
    .modal-content { width: 95%; padding: 15px; }
    #modal-video { height: 250px; }
    .related-item img { width: 100px; height: 60px; }
    .related-info h4 { font-size: 0.8em; }
}
