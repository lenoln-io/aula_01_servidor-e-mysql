let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;

function showSlide(n) {
	slides[currentSlide].classList.remove("active");
	currentSlide = (n + totalSlides) % totalSlides;
	slides[currentSlide].classList.add("active");
	slides[currentSlide].classList.add("fade-in");
	updateSlideCounter();
}

function nextSlide() {
	showSlide(currentSlide + 1);
}

function previousSlide() {
	showSlide(currentSlide - 1);
}

function updateSlideCounter() {
	document.getElementById("slideCounter").textContent =
		`${currentSlide + 1} / ${totalSlides}`;
}

// Keyboard navigation
document.addEventListener("keydown", (e) => {
	if (e.key === "ArrowRight" || e.key === " ") {
		nextSlide();
	} else if (e.key === "ArrowLeft") {
		previousSlide();
	}
});

// Installation steps
function showStep(stepNumber) {
	const steps = {
		1: {
			title: "📥 Passo 1: Download",
			content: `
                <div class="space-y-3">
                    <p class="text-gray-700">1. Acesse o site oficial: <span class="bg-green-100 px-2 py-1 rounded font-mono text-sm">https://www.apachefriends.org</span></p>
                    <p class="text-gray-700">2. Clique em "Download" para sua plataforma (Windows/Mac/Linux)</p>
                    <p class="text-gray-700">3. Escolha a versão mais recente (recomendado: PHP 8.x)</p>
                    <div class="bg-blue-50 border-l-4 border-blue-400 p-4 mt-4">
                        <p class="text-blue-800"><strong>💡 Dica:</strong> O arquivo tem aproximadamente 150MB</p>
                    </div>
                </div>
            `,
		},
		2: {
			title: "⚙️ Passo 2: Instalação",
			content: `
                <div class="space-y-3">
                    <p class="text-gray-700">1. Execute o arquivo baixado como administrador</p>
                    <p class="text-gray-700">2. Siga o assistente de instalação</p>
                    <p class="text-gray-700">3. Escolha os componentes: Apache, MySQL, PHP, phpMyAdmin</p>
                    <p class="text-gray-700">4. Defina a pasta de instalação (padrão: C:\\xampp)</p>
                    <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-4">
                        <p class="text-yellow-800"><strong>⚠️ Atenção:</strong> Desative temporariamente o antivírus se necessário</p>
                    </div>
                </div>
            `,
		},
		3: {
			title: "🚀 Passo 3: Inicialização",
			content: `
                <div class="space-y-3">
                    <p class="text-gray-700">1. Abra o XAMPP Control Panel</p>
                    <p class="text-gray-700">2. Clique em "Start" para Apache</p>
                    <p class="text-gray-700">3. Clique em "Start" para MySQL</p>
                    <p class="text-gray-700">4. Verifique se ambos estão com status "Running" (verde)</p>
                    <div class="bg-green-50 border-l-4 border-green-400 p-4 mt-4">
                        <p class="text-green-800"><strong>✅ Sucesso:</strong> Ambos serviços devem aparecer em verde</p>
                    </div>
                </div>
            `,
		},
		4: {
			title: "🧪 Passo 4: Teste",
			content: `
                <div class="space-y-3">
                    <p class="text-gray-700">1. Abra seu navegador</p>
                    <p class="text-gray-700">2. Digite: <span class="bg-green-100 px-2 py-1 rounded font-mono text-sm">localhost</span></p>
                    <p class="text-gray-700">3. Deve aparecer a página de boas-vindas do XAMPP</p>
                    <p class="text-gray-700">4. Teste também: <span class="bg-green-100 px-2 py-1 rounded font-mono text-sm">localhost/dashboard</span></p>
                    <div class="bg-blue-50 border-l-4 border-blue-400 p-4 mt-4">
                        <p class="text-blue-800"><strong>🎉 Parabéns:</strong> Seu servidor local está funcionando!</p>
                    </div>
                </div>
            `,
		},
		5: {
			title: "🗄️ Passo 5: phpMyAdmin",
			content: `
                <div class="space-y-3">
                    <p class="text-gray-700">1. No navegador, digite: <span class="bg-green-100 px-2 py-1 rounded font-mono text-sm">localhost/phpmyadmin</span></p>
                    <p class="text-gray-700">2. Faça login (usuário: root, senha: vazia)</p>
                    <p class="text-gray-700">3. Explore a interface do phpMyAdmin</p>
                    <p class="text-gray-700">4. Agora você pode criar bancos de dados!</p>
                    <div class="bg-purple-50 border-l-4 border-purple-400 p-4 mt-4">
                        <p class="text-purple-800"><strong>🔧 Pronto:</strong> Ambiente completo configurado para desenvolvimento!</p>
                    </div>
                </div>
            `,
		},
	};

	const step = steps[stepNumber];
	document.getElementById("step-content").innerHTML = `
        <h3 class="text-xl font-semibold text-gray-800 mb-4">${step.title}</h3>
        ${step.content}
    `;
}

// Show answers
function showAnswer(questionNumber) {
	const answer = document.getElementById(`answer-${questionNumber}`);
	answer.classList.toggle("hidden");
}

// Copy code function
function copyCode() {
	const code = `-- Criar banco de dados da biblioteca
CREATE DATABASE biblioteca_escolar;

-- Usar o banco criado
USE biblioteca_escolar;

-- Criar primeira tabela
CREATE TABLE categorias (
id INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(50) NOT NULL,
descricao TEXT
);`;

	navigator.clipboard.writeText(code).then(() => {
		alert("Código copiado para a área de transferência!");
	});
}

// Initialize first step
showStep(1);
