const ArrMenuServices = ArrFromCollection(document.getElementsByClassName("menu-services-block"));
const ArrContentServices = ArrFromCollection(document.getElementsByClassName("content-services"));
const ArrOurWorkMenuBlocks = ArrFromCollection(document.getElementsByClassName("menu-our-work-block"));
const ArrOurWorkElements = ArrFromCollection(document.getElementsByClassName("label-block"));
const AllCategory = document.getElementById("allLabelBlocks");
const ArrSliderElements = ArrFromCollection(document.getElementsByClassName("img-block"));
const ArrReviewBlocks = ArrFromCollection(document.getElementsByClassName("review-block"));


function ArrFromCollection(collection) {
    return Array.from(collection);
}

function removeActiveOfArray(Array) {
    Array.forEach(function (ArrElem) {
        ArrElem.classList.remove("active");
    })
}

function addActiveOnElem(ActiveElem) {
    ActiveElem.classList.add("active");
}

function slider(item) {
    ArrReviewBlocks.forEach(function (ReviewBlocksItem) {
        if (ReviewBlocksItem.getAttribute("data-name") === item.getAttribute("data-name")) {
            removeActiveOfArray(ArrReviewBlocks);
            addActiveOnElem(ReviewBlocksItem);
        }
    });
}

/*
Some comment
*/

ArrMenuServices.forEach((element)=>element.onclick = function () {
    removeActiveOfArray(ArrMenuServices);
    addActiveOnElem(element);
    const dataNameMenuServices = element.getAttribute("data-name");
    ArrContentServices.forEach(function (item) {
        const dataNameContentServices = item.getAttribute("data-name");
        if (dataNameMenuServices === dataNameContentServices) {
            item.classList.add("active");
        } else item.classList.remove("active");
    });
});

ArrOurWorkMenuBlocks.forEach(function (elem) {
    elem.onclick = function () {
        removeActiveOfArray(ArrOurWorkMenuBlocks);
        addActiveOnElem(elem);
        loadMoreButton.classList.remove("active");
        const dataCategoryOurWorkMenuBlocks = elem.getAttribute("data-category");
        ArrOurWorkElements.forEach(function (item) {
            const dataNameOurWorkElements = item.getAttribute("data-category");
            if (dataCategoryOurWorkMenuBlocks === dataNameOurWorkElements) {
                item.classList.add("visible");
            } else item.classList.remove("visible");
        });
    };
});

AllCategory.onclick = function () {
    loadMoreButton.style.display = "flex";
    addActiveOnElem(loadMoreButton);
    removeActiveOfArray(ArrOurWorkMenuBlocks);
    AllCategory.classList.add("active");
    ArrOurWorkElements.forEach(function (elem) {
        elem.classList.remove("visible");
    });
    for (let i=0; i<12; i++ ) {
        (ArrOurWorkElements[i]).classList.add("visible");
    }
};

// -------------------------button----------------------------
const loadMoreButton = document.getElementById("loadMoreButton");
loadMoreButton.onclick = function () {
    let i;
    for (i=0; i<24; i++ ) {
        (ArrOurWorkElements[i]).classList.add("visible");
    }
    this.style.display="none";
};
// -----------------------------------------------------------

// -------------------------slider----------------------------

ArrSliderElements.forEach(function (elem) {
    elem.onclick = function () {
        removeActiveOfArray(ArrSliderElements);
        addActiveOnElem(elem);
        slider(elem);
    }
});

document.getElementById("back-arrow").onclick = function () {
    let activeElem = ArrSliderElements.find(function (elem) {
        return  elem.classList.contains("active");
    });
    activeElem.classList.remove("active");
    let currentIndex = ArrSliderElements.indexOf(activeElem);
    if (currentIndex === 0) {
        currentIndex = 3;
        ArrSliderElements[3].classList.add("active");
        slider(ArrSliderElements[currentIndex]);
        return
    }
    ArrSliderElements[currentIndex-1].classList.add("active");
    slider(ArrSliderElements[currentIndex - 1]);
};

document.getElementById("next-arrow").onclick = function () {
    let activeElem = ArrSliderElements.find(function (elem) {
        return  elem.classList.contains("active");
    });
    activeElem.classList.remove("active");
    let currentIndex = ArrSliderElements.indexOf(activeElem);
    if (currentIndex === 3) {
        currentIndex = 0;
        ArrSliderElements[0].classList.add("active");
        slider(ArrSliderElements[currentIndex]);
        return
    }
    ArrSliderElements[currentIndex+1].classList.add("active");
    slider(ArrSliderElements[currentIndex + 1]);
};
