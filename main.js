class JQuery {
    constructor(query){
        this.selector = query;
        if(JQuery.isElement(query)){
            this.elements = query
        } else {
            this.elements = [...document.querySelectorAll(this.selector)];
        }
        if(this.elements.length === 1){
            this.elements = this.elements[0];
        }
        this.length = this.elements.length || 0;
    }
    static isElement(o){
        return (
            typeof HTMLElement === "object" ? o instanceof HTMLElement : //DOM2
                o && typeof o === "object" && o !== null && o.nodeType === 1 && typeof o.nodeName==="string"
        );
    }

    hide(){
        this.elements.map(function(elem) {
            elem.style.display = 'none';
        });
        return this;
    }
    show(){
        this.elements.map(function(elem) {
            elem.style.display = 'block';
        });
        return this;
    }
    toggle(){
        this.elements.map(function(elem) {
            if(elem.style.display === 'none'){
                elem.style.display = 'block';
            }else {
                elem.style.display = 'none'
            }
        });
        return this;
    }

    click(callback){
        this.elements.map(function(elem) {
            elem.addEventListener('click', function(e) {
                callback(new JQuery(e.target));
            })
        });
        return this;
    }

    css(params){
        if(arguments.length === 1){
            return getComputedStyle(this.elements)[params];
        }
    }
    // $.css('color')


}

const $ = function(selector) {
    return new JQuery(selector)
};

