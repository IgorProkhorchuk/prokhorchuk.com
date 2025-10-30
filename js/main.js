document.addEventListener('DOMContentLoaded', () => {
    const frames = [
        'p', 'pr', 'pro', 'prok', 'prokh', 'prokho', 'prokhor', 'prokhorc',
        'prokhorchu', 'prokhorchuk', 'prokhorchu', 'prokhorc', 'prokhor',
        'prokho', 'prokh', 'prok', 'pro', 'pr', 'p'
    ];

    let index = 0;

    function updateTitleName() {
        document.title = frames[index % frames.length];
        index += 1;
    }

    window.updateTitleName = updateTitleName;
    setInterval(updateTitleName, 500);
});
