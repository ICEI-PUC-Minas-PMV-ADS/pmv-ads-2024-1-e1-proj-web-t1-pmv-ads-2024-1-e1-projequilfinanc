function toProfile(){
    console.log('called')
    const profile = JSON.parse(localStorage.getItem('user_profile'))
    document.location.href = profile.profile == 1 ? 'Individual.html' : 'Familiar.html'
}