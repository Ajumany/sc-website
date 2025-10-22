document.addEventListener('DOMContentLoaded', () => {

    // 選手データ
    // ここの情報を変更・追加することで、表示される選手を簡単に管理できます。
    const players = [
        { name: '田中 翼', number: 10, position: 'FW (フォワード)', imageUrl: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=387&auto=format&fit=crop' },
        { name: '鈴木 大地', number: 8, position: 'MF (ミッドフィールダー)', imageUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=387&auto=format&fit=crop' },
        { name: '高橋 海斗', number: 4, position: 'DF (ディフェンダー)', imageUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=387&auto=format&fit=crop' },
        { name: '伊藤 翔', number: 1, position: 'GK (ゴールキーパー)', imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=387&auto=format&fit=crop' },
        { name: '渡辺 蓮', number: 7, position: 'MF (ミッドフィールダー)', imageUrl: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?q=80&w=387&auto=format&fit=crop' },
        { name: '山本 航', number: 22, position: 'DF (ディフェンダー)', imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=387&auto=format&fit=crop' },
        { name: '中村 陽太', number: 11, position: 'FW (フォワード)', imageUrl: 'https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?q=80&w=387&auto=format&fit=crop' }
    ];

    const playerGrid = document.getElementById('player-grid');

    // 選手データからHTMLを生成して表示
    players.forEach(player => {
        const card = document.createElement('div');
        card.className = 'player-card fade-in';
        card.innerHTML = `
            <img src="${player.imageUrl}" alt="${player.name}" class="player-card-img">
            <div class="player-card-body">
                <div class="player-card-info">
                    <h3 class="player-card-name">${player.name}</h3>
                    <p class="player-card-position">${player.position}</p>
                </div>
                <span class="player-card-number">${player.number}</span>
            </div>
        `;
        playerGrid.appendChild(card);
    });

    // スクロールに応じたフェードインアニメーション
    const fadeInElements = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1 // 10%表示されたら実行
    });

    fadeInElements.forEach(el => {
        observer.observe(el);
    });

});