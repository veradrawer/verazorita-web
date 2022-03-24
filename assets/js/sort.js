---
---

var categories = {
    all: {
        'all': true
    },
    {{ site.tags }}
    {{ "disciplines: {"}}
    {{ "'" | append: site.posts[0].discipline[0] | append: "'" }}: false,
        'design-research': false,
        'service-design': false,
        'design-craft': false,
        'game-design': false
    },
    tags: {
        'brand': false,
        'community': false,
        'education': false,
        'esports': false,
        'field-stories': false,
        'finctech': false,
        'gastronomy': false,
        'healthcare': false,
        'legal': false,
        'mapping': false,
        'workshops': false
    }
};

function catOnClick(event) {
    // CLICK
    // console.log({{site.posts[0].tags[0]}});
    // CLICK
    if (event.target.id !== 'all'
            || !categories[(event.target.getAttribute("name"))][(event.target.id)]) {
        categories[(event.target.getAttribute("name"))][(event.target.id)] =
            !categories[(event.target.getAttribute("name"))][(event.target.id)];
        if (categories[(event.target.getAttribute("name"))][(event.target.id)]
                && !(event.target.className.includes(" category-selected"))) {
            event.target.className += " category-selected";
        } else {
            event.target.className = event.target.className.replace(' category-selected', '');
        }
        resetCategories(event.target);
    }
    if (!anyCategoriesSelected()) {
        categories[(document.getElementById("all").getAttribute("name"))]["all"] = true;
        if (!(event.target.className.includes(" category-selected"))) {
            document.getElementById("all").className += " category-selected";
        }
    }
    toggleItemsVisibility();
}

function resetCategories(target) {
    if (target.id === 'all') {
        for (var i = 0; i < document.getElementsByName("disciplines").length; i++) {
            var discipline = document.getElementsByName("disciplines")[i];
            categories[(discipline.getAttribute("name"))][(discipline.id)] = false;
            discipline.className = discipline.className.replace(' category-selected', '');
        }
        for (var i = 0; i < document.getElementsByName("tags").length; i++) {
            var tag = document.getElementsByName("tags")[i];
            categories[(tag.getAttribute("name"))][(tag.id)] = false;
            tag.className = tag.className.replace(' category-selected', '');
        }
    } else {
        categories[(document.getElementById("all").getAttribute("name"))]["all"] = false;
        document.getElementById("all").className = document.getElementById("all").className.replace(' category-selected', '');
    }
}

function anyCategoriesSelected() {
    var anyCategoriesSelected = false;
    for (var i = 0; i < document.getElementsByName("disciplines").length; i++) {
        var discipline = document.getElementsByName("disciplines")[i];
        if (categories[(discipline.getAttribute("name"))][(discipline.id)]) {
            anyCategoriesSelected = true;
        }
    }
    for (var i = 0; i < document.getElementsByName("tags").length; i++) {
        var tag = document.getElementsByName("tags")[i];
        if (categories[(tag.getAttribute("name"))][(tag.id)]) {
            anyCategoriesSelected = true;
        }
    }
    return anyCategoriesSelected;
}
// Luis dice que lo siente mucho por lo que toca hacer ahora.
// Reemplazar el selector del a por uno al div con clase sort-by-wrap
// y que eliminar las del año va a ser un problema porque se queda de residuo.
// Habrá que hacer que cuando termines de togglear las entradas tendrás que inespeccionar
// los elementos o quizás la lista para luego elegir si borrar el año o no:
// Si hay entradas mostradas de un año que no se borre el año, y que si no hay, que sí se borre.
// Y con eso ya estaría el sort. Que F. —Louis 2021/09/09 21:43 CEST
function toggleItemsVisibility () {
    for (var i = 0; i < document.getElementsByName("disciplines").length; i++) {
        var discipline = document.getElementsByName("disciplines")[i];
        if (document.querySelector('a[data-disciplines*='+discipline.id+']') != null) {
            if (categories[(discipline.getAttribute("name"))][(discipline.id)]) {
                document.querySelector('a[data-disciplines*='+discipline.id+']').style = "display:none";
            } else {
                document.querySelector('a[data-disciplines*='+discipline.id+']').style = "display:inline";
            }
        }
    }
    for (var i = 0; i < document.getElementsByName("tags").length; i++) {
        var tag = document.getElementsByName("tags")[i];
        if (document.querySelector('a[data-tags*='+tag.id+']') != null) {
            if (categories[(tag.getAttribute("name"))][(tag.id)]) {
                document.querySelector('a[data-tags*='+tag.id+']').style = "display:none";
            } else {
                document.querySelector('a[data-tags*='+tag.id+']').style = "display:inline";
            }
        }
    }
}