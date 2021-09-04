var categories = {
    all: {
        'all': true
    },
    disciplines: {
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