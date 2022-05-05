
const numberToCpf = (n: string) => n.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
const cpfToNumber = (n: string) => n.replace(/[^\w\s]/gi, '');
const toMoney = (n: string) => parseFloat(n).toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 3
  })
const toDate = (d: string): string => {
    let firstSplit: string;
    let day: string;
    let mounth: string;
    let year: string;
    if(d.length > 0){
        if(String(d).split("").includes("T")){
            firstSplit = d.split("T")[0];
            day = firstSplit.split("-")[2];
            mounth = firstSplit.split("-")[1];
            year = firstSplit.split("-")[0];
        }else{
            firstSplit = String(d).split(" ")[0];
            day = firstSplit.split("-")[2];
            mounth = firstSplit.split("-")[1];
            year = firstSplit.split("-")[0];
        }
        return `${day}/${mounth}/${year}`
    }
    return ""
}
const toDateUS = (d: string): string => {
    const firstSplit: string = d.split(" ")[0];
    const day: string = firstSplit.split("-")[2];
    const mounth: string = firstSplit.split("-")[1];
    const year: string = firstSplit.split("-")[0];
    return `${year}-${mounth}-${day}`
}


export { numberToCpf, cpfToNumber, toDate, toDateUS, toMoney}