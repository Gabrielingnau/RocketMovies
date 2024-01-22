import { GithubUser } from "./GithubUser.js"

export class Favorites {
    constructor(root) {
        this.root = document.querySelector(root)
        this.load()
    }

    load () {
        this.entries = JSON.parse(localStorage.getItem('@github-favorites:')) || []    
    }

    save () {
        localStorage.setItem('@github-favorites:', JSON.stringify(this.entries))
    }

    async add(username) {

        
        try {
            const userExist = this.entries.find(entry => entry.login === username)
    
            if(userExist) {
                throw new Error('Usuario já cadastrado!')
            }

            const user = await GithubUser.search(username)

            if (user.login === undefined) {
                throw new Error('Usario não encontrado!')
            }

            this.entries = [user, ...this.entries]
            this.update()
            this.save()

        } catch (error) {
            alert (error.message)
        }
    }

delete (user) {
    const filteredEnteris = this.entries.filter(entry => entry.login !== user.login)
    this.entries = filteredEnteris
    this.update()
    this.save()
}
}

export class FavoritesView extends Favorites {
    constructor(root) {
        super(root)

        this.tbody = this.root.querySelector('table tbody')
        
        this.update()
        this.onadd()
    }
    
    onadd () {
        const addButton = this.root.querySelector('.search button')
        addButton.onclick = () => {
            const {value} = this.root.querySelector('.search input')
            
            this.add(value)
        }
    }
    
    update() {
    this.emptyState()
    this.removeAlltr()

   

this.entries.forEach(user => {
    const Row = this.creatRow()

    Row.querySelector('.user img').src = `https://github.com/${user.login}.png`

    Row.querySelector('.user img').alt = `image de ${user.name}`

    Row.querySelector('.user a').href = `https://github.com/${user.login}`

    Row.querySelector('.user p').textContent = user.name

    Row.querySelector('.user span').textContent = user.login

    Row.querySelector('.repositores').textContent = user.public_repos

    Row.querySelector('.followers').textContent = user.followers

    Row.querySelector('.remove').onclick = () => {
        const isOk = confirm('Tem certeza que deseja deletar essa linha?')
        if(isOk) {
            this.delete(user)
        }
    }


    this.tbody.append(Row)
})

}

creatRow () {
    const tr = document.createElement('tr')

    tr.innerHTML = `
    <td class="user">
    <img src="https://github.com/maykbrito.png" alt="">
    <a href="https://github.com/maykbrito">
        <span>Mayk Brito</span>
        <p>/maykbrito</p>
    </a>
    </td>
    <td class="repositores">123</td>
    <td class="followers">1234</td>
    <td><button class="remove">Remover</button></td>`

    return tr
}

removeAlltr () {
    this.tbody.querySelectorAll('tr').forEach((tr) => {
        tr.remove()
    });
}

emptyState() {
    if (this.entries.length === 0) {
      this.root.querySelector('.table-wr').classList.remove('hide')
      this.root.querySelector('.table-radius').classList.add('borda')
    } else {
      this.root.querySelector('.table-wr').classList.add('hide')
      this.root.querySelector('.table-radius').classList.remove('borda')
    }
  }

}











