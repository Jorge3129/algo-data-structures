const myFavoriteObj = {
    guessThis() {
        const getName = () => {
            // копируем значение this из внешнего окружения
            console.log(this.name)
        }
        getName()
    },
    name: 'Marko Polo',
    thisIsAnnoying(callback) {
        callback()
    }
}
myFavoriteObj.guessThis() // window
myFavoriteObj.thisIsAnnoying(function() {
    console.log(this?.name) // window
})