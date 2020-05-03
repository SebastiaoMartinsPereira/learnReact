import M from 'materialize-css';

const PopUp = {

    showMenssage: (msg, status = 'error') => {

        const cssClass = [
            { status: 'success', color: 'green' },
            { status: 'error', color: 'red' },
            { status: 'attention', color: 'yellow' },
            { status: 'warning', color: 'orange' }
        ];

        M.toast({ html: msg, classes: cssClass.find(s=>{  return s.status===status }).color, displayLength: 2000 });
    }
}

export default PopUp;