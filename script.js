        const hangnemek = ['C', 'Cisz', 'Desz', 'D', 'Disz', 'Esz', 'E', 'F', 'Fisz', 'Gesz', 'G', 'Gisz', 'Asz', 'A', 'B', 'H'];
        const jellegek = ['dúr', 'moll'];
        const mollJellegek = ['természetes', 'összhangzatos', 'melodikus'];

        function generateHangnem() {
            const hangnem = hangnemek[Math.floor(Math.random() * hangnemek.length)];
            const jelleg = jellegek[Math.floor(Math.random() * jellegek.length)];
            const mollJelleg = mollJellegek[Math.floor(Math.random() * mollJellegek.length)];

            let outputText = '';

            if (jelleg === 'dúr') {
                outputText = `${hangnem} - ${jelleg}`;
            } else {
                outputText = `${hangnem} - ${jelleg} (${mollJelleg})`;
            }

            document.getElementById('outputButton').innerText = outputText;
        }
