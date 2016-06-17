module.exports=function(grunt){
	grunt.initConfig({
		////版本1
		// pkg:grunt.file.readJSON('package.json')
		// ,uglify:{
		// 	options:{
		// 		banner:'/*! <%=pkg.file %> <%=grunt.template.today("yyyy-mm-dd") %>*/\n'
		// 	}
		// 	,build:{
		// 		src:'src/<%=pkg.file %>.js'
		// 		,dest:'dest/js/<%=pkg.file %>.min.js'
		// 	}
		// }


		////版本2
		// // 合并
		// concat:{
		// 	options:{
		// 		separaotr:';'
		// 	}
		// 	,dist:{
		// 		src:['src/zepto.js','src/underscore.js','src/bankbone.js']
		// 		,dest:'src/libs.js'
		// 	}
		// }
		// //压缩
		// ,uglify:{
		// 	build:{
		// 		src:'src/libs.js'
		// 		,dest:'dest/js/libs.min.js'
		// 	}
		// }

		////版本3
		// pkg:grunt.file.readJSON('package.json')
		// ,uglify:{
		// 	'my_target':{
		// 		'files':{
		// 			'dest/js/libs.min.js':['src/zepto.js','src/underscore.js','src/bankbone.js']
		// 		}
		// 	}
		// }

		// //版本4
		// pkg:grunt.file.readJSON('package.json')
		// ,uglify:{
		// 	options:{
		// 		banner:'/*! <%=pkg.file %> */'
		// 	}
		// 	,my_target:{
		// 		files:[{
		// 			expand:true
		// 			,cwd:'src'
		// 			,src:'**/*.js'
		// 			,dest:'dest/js'
		// 		}]
		// 	}
		// }

		//  jshint:{
		//  	all:['Gruntfile.js','src/*.js']
		//  }

	});

	//grunt.loadNpmTasks('grunt-contrib-uglify');
	//grunt.loadNpmTasks('grunt-contrib-jshint');

	//grunt.registerTask('default',['jshint']);//'uglify',
}

}
