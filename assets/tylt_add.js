//Drop Pkm - 2025 Pinball
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('nav ul li a').forEach(function (link) {
        if (link.textContent.trim() === 'Drop') {
            var span = document.createElement('span');
            span.className = 'pkm';
            link.appendChild(span);
        }
    });
});

//Collection Summer - 2025
document.addEventListener('DOMContentLoaded', function () {
    const targetText = 'Summer Collection';

    document.querySelectorAll('nav ul li a').forEach(function (link) {
        const cleanText = link.textContent.trim().replace(/\s+/g, '').toUpperCase();
        const cleanTarget = targetText.replace(/\s+/g, '').toUpperCase();

        if (cleanText === cleanTarget && !link.dataset.animated) {
            link.dataset.animated = 'true';
            link.textContent = '';

            const chars = targetText.split('');
            const spans = [];

            chars.forEach((char, i) => {
                const span = document.createElement('span');

                if (char === ' ') {
                    span.innerHTML = '&nbsp;';
                    span.style.display = 'inline-block';
                    span.style.width = '0.5em';
                } else {
                    span.textContent = char;
                    span.style.display = 'inline-block';
                    span.style.transition = `
                        transform 0.4s cubic-bezier(.68,-0.55,.27,1.55),
                        color 0.4s ease-in-out
                    `;
                    span.style.color = 'inherit';
                }

                link.appendChild(span);
                spans.push(span);
            });

            function waveAnimation() {
                spans.forEach((span, i) => {
                    if (span.textContent.trim() !== '') {
                        setTimeout(() => {
                            // Monte avec couleur #FFBF47
                            span.style.transform = 'translateY(-6px)';
                            span.style.color = '#FFBF47';
                            setTimeout(() => {
                                // Redescend avec couleur #329FFE
                                span.style.transform = 'translateY(0)';
                                span.style.color = '#329FFE';
                                setTimeout(() => {
                                    // Retour à la couleur d'origine (héritée)
                                    span.style.color = '';
                                }, 300);
                            }, 400);
                        }, i * 60);
                    }
                });
            }

            const totalDuration = (spans.length - 1) * 60 + 400;

            setTimeout(function loop() {
                waveAnimation();
                setTimeout(loop, totalDuration + 3000);
            }, 500);
        }
    });
});


//Collection Summer - 2025
document.addEventListener('DOMContentLoaded', function () {
    const targetText = 'MAGIC BEAU GOSSE';

    document.querySelectorAll('nav ul li a').forEach(function (link) {
        const cleanText = link.textContent.trim().replace(/\s+/g, '').toUpperCase();
        const cleanTarget = targetText.replace(/\s+/g, '').toUpperCase();

        if (cleanText === cleanTarget && !link.dataset.animated) {
            link.dataset.animated = 'true';
            link.textContent = '';

            const chars = targetText.split('');
            const spans = [];

            chars.forEach((char, i) => {
                const span = document.createElement('span');

                if (char === ' ') {
                    span.innerHTML = '&nbsp;';
                    span.style.display = 'inline-block';
                    span.style.width = '0.2em';
                } else {
                    span.textContent = char;
                    span.style.display = 'inline-block';
                    span.style.transition = `
                        transform 0.4s cubic-bezier(.68,-0.55,.27,1.55),
                        color 0.4s ease-in-out
                    `;
                    span.style.color = 'inherit';
                }

                link.appendChild(span);
                spans.push(span);
            });

            function waveAnimation() {
                spans.forEach((span, i) => {
                    if (span.textContent.trim() !== '') {
                        setTimeout(() => {
                            span.style.color = '#f5d469';
                            setTimeout(() => {
                                span.style.color = '#623166';
                                setTimeout(() => {
                                    // Retour à la couleur d'origine (héritée)
                                    span.style.transform = 'translateY(0px)';
                                    span.style.color = '';
                                }, 300);
                            }, 400);
                        }, i * 60);
                    }
                });
            }

            const totalDuration = (spans.length - 1) * 60 + 400;

            setTimeout(function loop() {
                waveAnimation();
                setTimeout(loop, totalDuration + 3000);
            }, 500);
        }
    });
});