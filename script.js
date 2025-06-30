document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');
    const elements = document.querySelectorAll('.element');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.05)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    const buttons = document.querySelectorAll('.mystical-btn');
    
    buttons.forEach((btn, index) => {
        btn.addEventListener('click', function() {
            const cardType = this.closest('.card').className.split(' ')[1];
            handleCardAction(cardType);
            
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    });

    function handleCardAction(cardType) {
        const messages = {
            'ai-fortune': '🔮 AI正在为您解读命运轨迹...\n✨ 您的未来充满无限可能！',
            'crystal-five-elements': '💎☯ 水晶与五行之力正在融合调和...\n🌟 感受宇宙能量的平衡与治愈！\n🌿 金木水火土，和谐共振！'
        };
        
        const message = messages[cardType] || '神秘的力量正在运作...';
        
        showMysticalMessage(message);
        triggerMysticalEffects();
    }

    function showMysticalMessage(message) {
        const existingModal = document.querySelector('.mystical-modal');
        if (existingModal) {
            existingModal.remove();
        }

        const modal = document.createElement('div');
        modal.className = 'mystical-modal';
        modal.innerHTML = `
            <div class="modal-content">
                <div class="modal-orb"></div>
                <p class="modal-message">${message}</p>
                <button class="modal-close">✨ 领悟 ✨</button>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        setTimeout(() => {
            modal.classList.add('show');
        }, 100);
        
        modal.querySelector('.modal-close').addEventListener('click', () => {
            modal.classList.remove('show');
            setTimeout(() => {
                modal.remove();
            }, 300);
        });
        
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('show');
                setTimeout(() => {
                    modal.remove();
                }, 300);
            }
        });
    }

    function triggerMysticalEffects() {
        elements.forEach((element, index) => {
            setTimeout(() => {
                element.style.transform = 'scale(1.2)';
                element.style.boxShadow = '0 0 20px rgba(255, 215, 0, 0.8)';
                
                setTimeout(() => {
                    element.style.transform = 'scale(1)';
                    element.style.boxShadow = 'none';
                }, 500);
            }, index * 200);
        });
    }

    const style = document.createElement('style');
    style.textContent = `
        .mystical-modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.8);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1000;
            opacity: 0;
            transition: opacity 0.3s ease;
        }
        
        .mystical-modal.show {
            opacity: 1;
        }
        
        .modal-content {
            background: linear-gradient(145deg, rgba(26, 10, 46, 0.95), rgba(22, 33, 62, 0.95));
            border: 2px solid rgba(184, 134, 11, 0.5);
            border-radius: 20px;
            padding: 40px;
            text-align: center;
            max-width: 400px;
            backdrop-filter: blur(10px);
            transform: scale(0.8);
            transition: transform 0.3s ease;
        }
        
        .mystical-modal.show .modal-content {
            transform: scale(1);
        }
        
        .modal-orb {
            width: 80px;
            height: 80px;
            border-radius: 50%;
            background: radial-gradient(circle at 30% 30%, #ffffff, #e6e6fa, #9370db, #4b0082);
            margin: 0 auto 20px;
            animation: pulse 2s ease-in-out infinite;
            box-shadow: 0 0 30px rgba(147, 112, 219, 0.6);
        }
        
        .modal-message {
            color: #e6e6fa;
            font-size: 1.1rem;
            line-height: 1.6;
            margin-bottom: 25px;
            text-shadow: 0 0 10px rgba(230, 230, 250, 0.3);
            white-space: pre-line;
        }
        
        .modal-close {
            background: linear-gradient(45deg, #b8860b, #daa520);
            border: none;
            padding: 12px 25px;
            border-radius: 25px;
            color: #000;
            font-weight: bold;
            cursor: pointer;
            transition: all 0.3s ease;
            text-transform: uppercase;
            letter-spacing: 1px;
            box-shadow: 0 5px 15px rgba(184, 134, 11, 0.3);
        }
        
        .modal-close:hover {
            background: linear-gradient(45deg, #daa520, #ffd700);
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(255, 215, 0, 0.4);
        }
    `;
    document.head.appendChild(style);

    function createFloatingParticles() {
        const particleCount = 15;
        for (let i = 0; i < particleCount; i++) {
            setTimeout(() => {
                const particle = document.createElement('div');
                particle.className = 'floating-particle';
                particle.style.cssText = `
                    position: fixed;
                    width: 4px;
                    height: 4px;
                    background: #ffd700;
                    border-radius: 50%;
                    pointer-events: none;
                    z-index: 10;
                    left: ${Math.random() * 100}%;
                    top: ${Math.random() * 100}%;
                    opacity: 0;
                    animation: floatUp 8s ease-out forwards;
                `;
                
                document.body.appendChild(particle);
                
                setTimeout(() => {
                    particle.remove();
                }, 8000);
            }, i * 300);
        }
    }

    const floatUpKeyframes = `
        @keyframes floatUp {
            0% {
                opacity: 0;
                transform: translateY(0) scale(0);
            }
            10% {
                opacity: 1;
                transform: translateY(-20px) scale(1);
            }
            90% {
                opacity: 1;
                transform: translateY(-200px) scale(1);
            }
            100% {
                opacity: 0;
                transform: translateY(-250px) scale(0);
            }
        }
    `;
    
    const particleStyle = document.createElement('style');
    particleStyle.textContent = floatUpKeyframes;
    document.head.appendChild(particleStyle);

    setInterval(createFloatingParticles, 10000);
    createFloatingParticles();
});