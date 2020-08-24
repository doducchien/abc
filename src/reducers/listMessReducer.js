// var listMessState = JSON.parse(localStorage.getItem('listMess'));
var listMessState = [
    {	idMess: 100,
        nameMess: 'Ngoc Trinh',
        idUser: 0,
        idTalker: 1,
        
    },
    {	idMess: 100,
        nameMess: 'Ngan 98',
        idUser: 0,
        idTalker: 2,
        
    },
    {	idMess: 100,
        nameMess: 'Yui Hatano',
        idUser: 0,
        idTalker: 3,
        
    },
    {	idMess: 100,
        nameMess: 'Sori Aora',
        idUser: 0,
        idTalker: 4,
        
    },
    {	idMess: 100,
        nameMess: 'Tsuna Kimura',
        idUser: 0,
        idTalker: 5,
        
    },
    {	idMess: 100,
        nameMess: 'Maria Ozawa',
        idUser: 0,
        idTalker: 6,
        
    },
    {	idMess: 100,
        nameMess: 'Tieu Long Nu',
        idUser: 0,
        idTalker: 7,
        
    },
    {	idMess: 100,
        nameMess: 'Chu Chi Nhuoc',
        idUser: 0,
        idTalker: 8,
        
    },
    {	idMess: 100,
        nameMess: 'Nguyen Thi Hien',
        idUser: 0,
        idTalker: 9,
        
    },
    {	idMess: 100,
        nameMess: 'Doan Thi Mai Hoa',
        idUser: 0,
        idTalker: 10,
        
    },
    {	idMess: 100,
        nameMess: 'Doan Thi Mai Hoa',
        idUser: 0,
        idTalker: 11,
        
    },
    {	idMess: 100,
        nameMess: 'Doan Thi Mai Hoa',
        idUser: 0,
        idTalker: 12,
        
    },
    {	idMess: 100,
        nameMess: 'Doan Thi Mai Hoa',
        idUser: 0,
        idTalker: 13,
        
    },
    {	idMess: 100,
        nameMess: 'Doan Thi Mai Hoa',
        idUser: 0,
        idTalker: 14,
        
    },
    {	idMess: 100,
        nameMess: 'Doan Thi Mai Hoa',
        idUser: 0,
        idTalker: 15,
        
    },
    {	idMess: 100,
        nameMess: 'Doan Thi Mai Hoa',
        idUser: 0,
        idTalker: 16,
        
    },
    {	idMess: 100,
        nameMess: 'Doan Thi Mai Hoa',
        idUser: 0,
        idTalker: 17,
        
    },
    {	idMess: 100,
        nameMess: 'Doan Thi Mai Hoa',
        idUser: 0,
        idTalker: 18,
        
    },
    {	idMess: 100,
        nameMess: 'Linh Xinh Gai',
        idUser: 0,
        idTalker: 19,
        
    },
    {	idMess: 100,
        nameMess: 'Giang Xinh Gai',
        idUser: 0,
        idTalker: 20,
        
    },
    {	idMess: 100,
        nameMess: 'Trang Xinh Gai',
        idUser: 0,
        idTalker: 21,
        
    },
    {	idMess: 100,
        nameMess: 'Mai Xinh Gai',
        idUser: 0,
        idTalker: 22,
        
    },
    {	idMess: 100,
        nameMess: 'Huyen Xấu Gai',
        idUser: 0,
        idTalker: 23,
        
    },
    {	idMess: 100,
        nameMess: 'Nhung Xinh Xí',
        idUser: 0,
        idTalker: 24,
        
    },
    {	idMess: 100,
        nameMess: 'Hoa Xinh Gai',
        idUser: 0,
        idTalker: 25,
        
    },
    {	idMess: 100,
        nameMess: 'Dieu Xinh Gai',
        idUser: 0,
        idTalker: 26,
        
    },
    {	idMess: 100,
        nameMess: 'Nga Xinh Gai',
        idUser: 0,
        idTalker: 27,
        
    },
    {	idMess: 100,
        nameMess: 'Duong Xinh Gai',
        idUser: 0,
        idTalker: 28,
        
    },
    {	idMess: 100,
        nameMess: 'Ngoc Xinh Gai',
        idUser: 0,
        idTalker: 29,
        
    },
    {	idMess: 100,
        nameMess: 'Hien Xinh Gai',
        idUser: 0,
        idTalker: 30,
        
    },
    {	idMess: 100,
        nameMess: 'Đao Xinh Gai',
        idUser: 0,
        idTalker: 31,
        
    },

];

const listMessReducer = (state = listMessState, action)=>{
    switch(action.type){
        case 0:{
            break;
        }
        default:{
            return [...state]
        }
    }
}
export default listMessReducer;