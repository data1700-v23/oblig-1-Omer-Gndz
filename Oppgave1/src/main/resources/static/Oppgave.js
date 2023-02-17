let Billetene = [];
function Kjøpbillet()
{
    let Filmnavn;
    try {
        Filmnavn = document.getElementById('select').value;
        if (Filmnavn == null || Filmnavn ==='')
        {
            throw new error;
        }
    } catch (error)
    {
        document.getElementById('SelectFilm').innerHTML = 'Velg en film';
    }
    let Antall;
    try {
        Antall = document.getElementById('Antall').value;
        if (Antall<1 ){
            throw new error;
        }
    } catch (error){
        document.getElementById('div1').style.color ='red'
        document.getElementById('div1').innerHTML = 'Må skrive noe inn i antall';
    }

    let Navn;
    try{
        Navn = document.getElementById('Fornavn').value;
        if ((Navn==null)||(Navn=="")){
            throw new error;
        }
    } catch (error) {
        document.getElementById('div2').style.color ='red'
        document.getElementById('div2').innerHTML =' Må skrive noe inn i fornavnet';
    }
    let Etternavn;
    try {
        Etternavn = document.getElementById('Etternavn').value;
        if ((Etternavn==null)||(Etternavn=="")){
            throw new error;
        }
    } catch (error) {
        document.getElementById('div3').style.color ='red'
        document.getElementById('div3').innerHTML =' Må skrive noe inn i etternavnet';

    }
    let Telefonnr;
    try {
        Telefonnr = document.getElementById('Telefonnr').value;
        if ((Telefonnr==null)||(Telefonnr=="")){
            throw new error;
        }
    } catch (error) {
        document.getElementById('div4').style.color ='red'
        document.getElementById('div4').innerHTML = ' Må skrive noe inn i  telefonnr ';

    }
    let Epost;
    try {
        Epost = document.getElementById('Epost').value;
        if ((Epost == null)||(Epost=="")){
            throw new error;
        }
    } catch (error) {
        document.getElementById('div5').style.color ='red'
        document.getElementById('div5').innerHTML =' Må skrive noe inn i epost'

    }

    let Billett = {
        Filmnavn: Filmnavn,
        Antall: Antall,
        Navn: Navn,
        Etternavn: Etternavn,
        Telefonnr: Telefonnr,
        Epost: Epost,
    }

    if(Antall !="" && Navn !="" && Etternavn !="" && Telefonnr !="" && Epost !=""){
        Billetene.push(Billett)
    }

    document.getElementById('select').value = '';
    document.getElementById('Antall').value = '';
    document.getElementById('Fornavn').value = '';
    document.getElementById('Etternavn').value = '';
    document.getElementById('Telefonnr').value = '';
    document.getElementById('Epost').value = '';

    visBilletene();

}

function visBilletene() {
    let ut = "<table border='1'>";
    ut += "<tr>";
    ut += "<th>Film</th><th>Antall</th><th>Navn</th><th>Etternavn</th><th>Telefonnr</th><th>Epost</th>";
    ut += "</tr>"

    for (let b of Billetene) {
        ut += "<tr> <td>" + b.Filmnavn + "</td><td>" + b.Antall +
            "</td><td>" + b.Navn + "</td><td>" + b.Etternavn +
            "</td><td>" + b.Telefonnr + "</td><td>" + b.Epost +"</td></tr>"

    }

    ut += "<table>";

    document.getElementById("Skriv").innerHTML = ut;

}

function SlettBilletene() {
    Billetene.splice(0,Billetene.length);
    visBilletene();
    document.getElementById('div1').innerHTML = '';
    document.getElementById('div2').innerHTML = '';
    document.getElementById('div3').innerHTML = '';
    document.getElementById('div4').innerHTML = '';
    document.getElementById('div5').innerHTML = '';
}