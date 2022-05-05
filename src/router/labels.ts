

const List = [
    //Dicas
    { icon: 'file-document', label: 'Dicas de Publicação', name:"Dicas", path: '/dicas',  component: () => import('../views/Dicas/index.vue')},
    { show: false, name:"Dicas/Criar", path: '/dicas/criar',  component: () => import('../views/Dicas/create.vue') },
    { show: false, name:"Dicas/Editar", path: '/dicas/edit/:id?',  component: () => import('../views/Dicas/update.vue') },

   //Dicas-Darias
   { icon: 'calendar', label: 'Eventos Diários', name:"Eventos Diários", path: '/eventos-diarios',  component: () => import('../views/EventosDiarios/index.vue')},
   { show: false, name:"Eventos Diários/Criar", path: '/eventos-diarios/criar',  component: () => import('../views/EventosDiarios/create.vue') },
   { show: false, name:"Eventos Diários/Editar", path: '/eventos-diarios/edit/:id?',  component: () => import('../views/EventosDiarios/update.vue') },


]

export default List;