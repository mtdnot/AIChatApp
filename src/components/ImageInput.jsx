import React from 'react'

export default class ImageInput extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            imageData: null
        }
       this.setImageData = this.props.setImageData
    }

    onFileChange(e) {
        const files = e.target.files
        if (files.length > 0) {
            var file = files[0]
            var reader = new FileReader()
            reader.onload = (e) => {
                this.setState({ imageData: e.target.result })
            };
            reader.readAsDataURL(file)
        } else {
            this.setState({ imageData: null })
        }
    }

    render() {
        const imageData = this.state.imageData
        this.setImageData(imageData)
        let preview = ''
        if (imageData != null) {
            preview = (
                <div>
                    <img src={imageData} />
                </div>
            )
        }

        return (
            <div>
                <div className="file-upload_area" >
                <input type="file" accept="image/*" className="file-upload_input" onChange={
                    (e) => {
                        this.onFileChange(e)
                    }
                } />
                </div>
                {preview}
            </div>
        )
    }
}