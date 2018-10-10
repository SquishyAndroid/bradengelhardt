import React, { Component } from 'react';
import projects from '../../assets/projects.js';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import posed from "react-pose";
import { Button, Intent } from "@blueprintjs/core";

const Project = posed.div({
	hidden: { opacity: 0 },
	visible: { opacity: 1, transition: { duration: 300 }}

});

export default class Projects extends Component {
	constructor(props) {
        super(props);
        this.state = {
	        isOpen: false,
	        width: 0,
	        height: 0,
	        index: null,
        };
    }

    handleMouseEnter(i, e) {
    	let project = e.target;
    	let width = project.offsetWidth;
    	let height = project.offsetHeight;
    	this.setState({ width, height, index: i });
    }

    handleMouseLeave(i, e) {
    	this.setState({ index: null });
    }

    renderProjects(projects) {
    	let int = 100;
		return projects.map((project, i) => {
			int += 90;
			return(
				<div
					className="project wow fadeInUp"
					data-wow-delay={int + "ms"} 
					key={i}
					onMouseEnter={this.handleMouseEnter.bind(this, i)}
					onMouseLeave={this.handleMouseLeave.bind(this, i)}
				>
					<Project 
						className="project-description"
						pose={i === this.state.index ? 'visible' : 'hidden'}
                        style={{
                        	display: i === this.state.index ? 'flex' : 'none',
                            width: this.state.width,
                            height: this.state.height
                        }}>
                        
                        <p>{project.description}</p>
                        <Button className="learn-more" intent={Intent.PRIMARY}>View more</Button>
                    </Project>
                    <img key={i} src={project.image} alt={project.description}/>
                </div>
			)
		})
    }

    render() {
    	return(
			<div className="section third">
				<ResponsiveMasonry
	                columnsCountBreakPoints={{ 100: 2, 480: 3, 1200: 4 }}
	            >
					<Masonry columnsCount={3} gutter="6px">
		                {this.renderProjects(projects)}
		            </Masonry>
		        </ResponsiveMasonry>
	        </div>
		)
    }
}