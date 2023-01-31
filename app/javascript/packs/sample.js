new Vue({
    // このelにHTMLのidを指定することで、そのidのDOMでVue.jsのインスタンスがインポートされる
    el: '#app',
    // dataは、定義されたVue.jsのインスタンスが持つ属性（値）
    data: {
      name: 'A山B郎',
      course: 'Webエンジニアコース',
      season: '2019年01月期',
      defaultLastId: 3,
      tasks: [
        { id: 1, name: '野呂浩良', course: '機械学習コース', season: '2019年01月期' },
        { id: 2, name: '富永修司', course: 'Webエンジニアコース', season: '2017年11月期' },
        { id: 3, name: '斉藤一起', course: 'Webエンジニアコース', season: '2017年11月期' }
      ]
    },
    // methodsに、Vue.jsのインスタンスに使用させたいメソッドを記載する
    methods: {
      addTask: function() {
        this.tasks.push({
            id: this.defaultLastId+=1,
            name: this.name ,
            course: this.course ,
            season: this.season 
        })
        this.name = '' 
        this.course = ''
        this.season = ''
          // この function() { } の中にaddStudentメソッド
          // （入力欄に入力された値と、ID値（最後に登録されたID値+1の値）が新たに出現する機能）の処理を書く
      }
    }
  })