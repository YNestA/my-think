import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import SimpleMDE from 'simplemde';
import marked from 'marked';
import highlight from 'highlight.js';
import 'highlight.js/styles/tomorrow-night.css';
import 'simplemde/dist/simplemde.min.css';

class Edit extends Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        this.smde=new SimpleMDE({
            element: document.getElementById('editor').childElementCount,
            autofocus: true,
            autosave: true,
            previewRender: function(plainText) {
                return marked(plainText,{
                    renderer: new marked.Renderer(),
                    gfm: true,
                    pedantic: false,
                    sanitize: false,
                    tables: true,
                    breaks: true,
                    smartLists: true,
                    smartypants: true,
                    highlight: function (code) {
                        return highlight.highlightAuto(code).value;
                    }
                });
            },
        });
    }
    render(){
        return(
            <div>
                <textarea id='editor'></textarea>
                <button onClick={()=>{
                    console.log(marked(this.smde.value(),{
                        renderer: new marked.Renderer(),
                        gfm: true,
                        pedantic: false,
                        sanitize: false,
                        tables: true,
                        breaks: true,
                        smartLists: true,
                        smartypants: true,
                        highlight: function (code) {
                            return highlight.highlightAuto(code).value;
                        }
                    }));
                }}>console</button>
            </div>

        );
    }
}

ReactDOM.render(
    <Edit/>,
    document.getElementById('main')
);