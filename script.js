document.addEventListener('DOMContentLoaded', () => {
    // AOS: biblioteca de animação exigida no projeto.
    AOS.init({
        duration: 650,
        once: true,
        offset: 70
    });

    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');

    menuToggle.addEventListener('click', () => {
        const aberto = menu.classList.toggle('open');
        menuToggle.setAttribute('aria-expanded', String(aberto));
        menuToggle.textContent = aberto ? '✕' : '☰';
    });

    document.querySelectorAll('.menu a').forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('open');
            menuToggle.setAttribute('aria-expanded', 'false');
            menuToggle.textContent = '☰';
        });
    });

    // Filtro funcional por categoria.
    const filtros = document.querySelectorAll('.categoria-btn');
    const cards = document.querySelectorAll('.livro-card');
    const emptyMessage = document.getElementById('empty-message');

    filtros.forEach(filtro => {
        filtro.addEventListener('click', () => {
            filtros.forEach(btn => btn.classList.remove('active'));
            filtro.classList.add('active');

            const categoria = filtro.dataset.filter;
            let encontrados = 0;

            cards.forEach(card => {
                const mostrar = categoria === 'todos' || card.dataset.categoria === categoria;
                card.style.display = mostrar ? '' : 'none';
                if (mostrar) encontrados++;
            });

            emptyMessage.hidden = encontrados !== 0;
        });
    });

    // Botões "Solicitar" preenchem o livro automaticamente e levam ao formulário.
    document.querySelectorAll('.btn-card').forEach(botao => {
        botao.addEventListener('click', () => {
            const livro = botao.dataset.livro;
            const select = document.getElementById('livro');

            select.value = livro;
            document.getElementById('contato').scrollIntoView({ behavior: 'smooth' });

            setTimeout(() => document.getElementById('nome').focus(), 500);
        });
    });

    // Formulário: validação e geração da mensagem para WhatsApp.
    const form = document.getElementById('form-solicitacao');
    const feedback = document.getElementById('form-feedback');

    form.addEventListener('submit', event => {
        event.preventDefault();

        const dados = {
            nome: document.getElementById('nome').value.trim(),
            email: document.getElementById('email').value.trim(),
            telefone: document.getElementById('telefone').value.trim(),
            livro: document.getElementById('livro').value,
            mensagem: document.getElementById('mensagem').value.trim()
        };

        if (!dados.nome || !dados.email || !dados.livro) {
            feedback.textContent = 'Preencha os campos obrigatórios.';
            feedback.style.color = '#b84b32';
            return;
        }

        const texto = [
            'Olá, Páginas Antigas!',
            '',
            `Meu nome: ${dados.nome}`,
            `E-mail: ${dados.email}`,
            `Telefone: ${dados.telefone || 'Não informado'}`,
            `Livro desejado: ${dados.livro}`,
            '',
            `Mensagem: ${dados.mensagem || 'Sem mensagem adicional'}`
        ].join('\n');

        // Número fictício para a atividade. Substitua pelo número real se necessário.
        const numeroWhatsApp = '551133334444';
        const linkWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(texto)}`;

        feedback.textContent = 'Solicitação preparada! Abrindo o WhatsApp...';
        feedback.style.color = '#2f6c5c';

        setTimeout(() => {
            window.open(linkWhatsApp, '_blank', 'noopener,noreferrer');
        }, 400);
    });

    // Validação visual simples do e-mail.
    const emailInput = document.getElementById('email');
    emailInput.addEventListener('blur', () => {
        if (emailInput.value && !emailInput.checkValidity()) {
            emailInput.setCustomValidity('Digite um e-mail válido.');
        } else {
            emailInput.setCustomValidity('');
        }
    });

    // Botão voltar ao topo.
    const backTop = document.getElementById('back-top');

    window.addEventListener('scroll', () => {
        backTop.classList.toggle('show', window.scrollY > 500);
    });

    backTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
