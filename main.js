
    var test = window.document.getElementById('burguer')
    var quit = window.document.getElementById('back')
    var execution = window.document.getElementById('items')
    test.addEventListener('click', pieta)
    quit.addEventListener('click', pieta_2)


    function pieta() {
                        if (execution.style.display == 'block') 
                                                                {
                                                                    items.style.diplay = 'none' 
                                                                }
                        else {
                                execution.style.display = 'block' 
                            }
                    }


    function pieta_2() {
                        if (execution.style.display == 'none') 
                                                                {
                                                                    items.style.diplay = 'block' 
                                                                }
                        else {
                                execution.style.display = 'none' 
                            }
                    }
