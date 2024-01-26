export default {
	ENG: { // 영문 버전
		pageTitle: 'Download Page',
		// 홈 메뉴명
		category: {
		// 카테고리
			menu: {
			// 카테고리명, 패스 경로
				home: {
					title: 'Home',
					path: '/'
				},
				guide: {
					title: 'Guide',
					path: '/guide'
				},
				download: {
					title: 'Download',
					path: '/download'
				},
			},
			mypage: {
			// 프로필 아이콘 메뉴명, 패스 경로
				title: 'My Page',
				path: '/mypage'
			},
			language: {
			// 언어 선택 메뉴명, 언어 선택
				title: 'Language',
				lan: {
					eng: 'ENG',
					kor: 'KOR'
				}
			},
			logout: {
			// 로그아웃 메뉴명, 패스 경로
				title: 'Logout',
				path: '/'
			}
		},
		home: {
		// 홈 메뉴 콘텐츠
			welcome: {
				title: 'Welcome',
				desc: 'Server Host - vpn.shadowwall.co.kr<br>You are connected<br>by ',
				goto: 'Go to Guide',
				gotoPath: '/guide/',
				ovpn: 'Download OVPN',
				ovpnPath: '/',
			},
			mypage: {
				title: 'My Page',
				desc: 'To change password, Use this page.',
				goto: 'Go to My Page',
				gotoPath: '/mypage',
			},
			download: {
				title: 'Download Client',
				desc: 'To download client software,<br>Use this page.',
				gotoPath: '/download',
				pc: 'Direct download',
				pcLink: '/',
				ios: 'Go to AppStore',
				iosLink: '/',
				android: 'Go to PlayStore',
				androidLink: '/',
			},
		},
		guide: {
		// 가이드 메뉴 콘텐츠
			windows: {
				title: 'How to connect VPN for Windows',
				contents: {
					step1: {
						title: 'Download OVPN File',
						desc: '1. windows desc',
						img: 'https://i0.wp.com/picjumbo.com/wp-content/uploads/social-networks.jpg?w=2210&quality=70',
					},
					step2: {
						title: 'Download OpenVPN Connect v3',
						desc: '2. windows desc',
						img: 'https://cdn.pixabay.com/photo/2016/12/09/11/33/smartphone-1894723_1280.jpg',
					},
					step3: {
						title: 'Windows',
						desc: '3. windows desc',
						img: 'https://cdn.pixabay.com/photo/2015/06/24/15/45/hands-820272_1280.jpg',
					},
					step4: {
						title: 'VPN',
						desc: '4. windows desc',
						img: 'https://cdn.pixabay.com/photo/2015/12/11/09/30/mobile-phone-1087845_1280.jpg',
					},
					step5: {
						title: 'VPN',
						desc: '5. windows desc',
						img: 'https://cdn.pixabay.com/photo/2015/12/11/09/30/mobile-phone-1087845_1280.jpg',
					},
					step6: {
						title: 'VPN',
						desc: '6. windows desc',
						img: 'https://cdn.pixabay.com/photo/2015/12/11/09/30/mobile-phone-1087845_1280.jpg',
					},
				}
			},
			macos: {
				title: 'How to connect VPN for MacOS',
				contents: {
					step1: {
						title: 'Download OVPN File',
						desc: '1. MacOS desc',
						img: 'https://cdn.pixabay.com/photo/2015/02/02/11/09/office-620822_1280.jpg',
					},
					step2: {
						title: 'Download OpenVPN Connect v3',
						desc: '2. MacOS desc',
						img: 'https://cdn.pixabay.com/photo/2015/06/24/15/45/hands-820272_1280.jpg',
					},
					step3: {
						title: 'MacOS',
						desc: '3. MacOS desc',
						img: 'https://cdn.pixabay.com/photo/2015/02/02/15/28/bar-621033_1280.jpg',
					},
					step4: {
						title: 'VPN',
						desc: '4. MacOS desc',
						img: 'https://cdn.pixabay.com/photo/2018/01/28/10/59/internet-3113279_1280.jpg',
					},
				}
			},
			ios: {
				title: 'How to connect VPN for iOS',
				contents: {
					step1: {
						title: 'Download OVPN File',
						desc: '1. iOS desc',
						img: 'https://cdn.pixabay.com/photo/2014/08/05/10/30/iphone-410324_1280.jpg',
					},
					step2: {
						title: 'Download OpenVPN Connect v3',
						desc: '2. iOS desc',
						img: 'https://cdn.pixabay.com/photo/2014/08/05/10/27/iphone-410311_1280.jpg',
					},
					step3: {
						title: 'iOS',
						desc: '3. iOS desc',
						img: 'https://cdn.pixabay.com/photo/2017/04/03/15/52/mobile-phone-2198770_1280.png',
					},
					step4: {
						title: 'VPN',
						desc: '4. iOS desc',
						img: 'https://cdn.pixabay.com/photo/2016/11/03/18/19/social-media-1795578_1280.jpg',
					},
				}
			},
			android: {
				title: 'How to connect VPN for Android',
				contents: {
					step1: {
						title: 'Download OVPN File',
						desc: '1. Android desc',
						img: 'https://cdn.pixabay.com/photo/2016/03/27/19/43/samsung-1283938_1280.jpg',
					},
					step2: {
						title: 'Download OpenVPN Connect v3',
						desc: '2. Android desc',
						img: 'https://cdn.pixabay.com/photo/2016/11/29/12/30/phone-1869510_1280.jpg',
					},
					step3: {
						title: 'Android',
						desc: '3. Android desc',
						img: 'https://cdn.pixabay.com/photo/2016/06/03/13/57/digital-marketing-1433427_1280.jpg',
					},
					step4: {
						title: 'VPN',
						desc: '4. Android desc',
						img: 'https://cdn.pixabay.com/photo/2016/11/03/18/19/social-media-1795578_1280.jpg',
					},
				}
			},
		},
		download: {
		// 다운로드 메뉴 콘텐츠
			title: 'Download Client',
			group1: 'For your device',
			group2: 'Others',
			download: 'Download',
			goto: 'Go to guide',
			clients: {
				windows: {
					os: 'Windows',
					desc: 'You can download OpenVPN Connet client for Windows'
				},
				macos: {
					os: 'MacOS',
					desc: 'You can download OpenVPN Connet client for MacOS',
				},
				ios: {
					os: 'iOS',
					desc: 'You can download OpenVPN Connet client for iOS',
				},
				android: {
					os: 'Android',
					desc: 'You can download OpenVPN Connet client for Android',
				},
			}
		},
		login: {
		// 로그인 페이지 콘텐츠
			title: 'VPN User Portal',
			username: 'Username',
			usernamePl: 'Enter your VPN account',
			password: 'Password',
			passwordPl: 'Enter your VPN password',
			login: 'Login'
		},
		mypage: {
		// 마이 페이지 콘텐츠
			title: 'My Page',
			download: 'Download OVPN',
			group: {
				title: 'Group',
				rnd: 'Research & Develement Center',
			},
			password: 'Password',
			passwordPl: 'Enter password',
			passwordPlNew: 'Enter new password',
			passwordPlConfirm: 'Confirm new password',
			button: {
				change: 'Change',
				cancel: 'Cancel',
				ok: 'OK'
			}
		},
	},
	KOR: { // 한글 버전
		pageTitle: '다운로드 페이지',
		// 홈 메뉴명
		category: {
		// 카테고리
			menu: {
			// 카테고리명, 패스 경로
				home: {
				// 홈 메뉴명, 패스 경로
					title: '홈',
					path: '/'
				},
				guide: {
				// 가이드 메뉴명, 패스 경로
					title: '가이드',
					path: '/guide'
				},
				download: {
				// 다운로드 메뉴명, 패스 경로
					title: '다운로드',
					path: '/download'
				},
			},
			mypage: {
			// 프로필 아이콘 메뉴명, 패스 경로
				title: '마이 페이지',
				path: '/mypage'
			},
			language: {
			// 언어 선택 메뉴명, 언어 선택
				title: '언어',
				lan: {
					eng: '영문',
					kor: '한글'
				}
			},
			logout: {
			// 로그아웃 메뉴명, 패스 경로
				title: '로그아웃',
				path: '/'
			}
		},
		home: {
		//
			welcome: {
				title: '환영합니다',
				desc: '서버 호스트 - vpn.shadowwall.co.kr<br>접속 환경 -',
				goto: '가이드 보기',
				gotoPath: '/guide/',
				ovpn: 'OVPN 다운로드',
				ovpnPath: '/',
			},
			mypage: {
				title: '마이 페이지',
				desc: '해당 페이지에서 비밀번호를<br>변경할 수 있습니다.',
				goto: '페이지 바로가기',
				gotoPath: '/mypage',
			},
			download: {
				title: '클라이언트 다운로드',
				desc: '해당 페이지에서 클라이언트 소프트웨어를<br>다운로드할 수 있습니다.',
				gotoPath: '/download',
				pc: '직접 다운로드',
				pcLink: '/',
				ios: '앱스토어 바로가기',
				iosLink: '/',
				android: '플레이스토어 바로가기',
				androidLink: '/',
			},
		},
		guide: {
		//
			windows: {
				title: 'Windows에서 VPN 연결하는 방법',
				contents: {
					step1: {
						title: 'OVPN 파일 다운로드',
						desc: '1. Windows 설명',
						img: 'https://i0.wp.com/picjumbo.com/wp-content/uploads/social-networks.jpg?w=2210&quality=70',
					},
					step2: {
						title: 'OpenVPN Connect v3 다운로드',
						desc: '2. Windows 설명',
						img: 'https://cdn.pixabay.com/photo/2016/12/09/11/33/smartphone-1894723_1280.jpg',
					},
					step3: {
						title: 'Windows',
						desc: '3. Windows 설명',
						img: 'https://cdn.pixabay.com/photo/2015/06/24/15/45/hands-820272_1280.jpg',
					},
					step4: {
						title: 'VPN',
						desc: '4. Windows 설명',
						img: 'https://cdn.pixabay.com/photo/2015/12/11/09/30/mobile-phone-1087845_1280.jpg',
					},
					step5: {
						title: 'VPN',
						desc: '5. windows desc',
						img: 'https://cdn.pixabay.com/photo/2015/12/11/09/30/mobile-phone-1087845_1280.jpg',
					},
					step6: {
						title: 'VPN',
						desc: '6. windows desc',
						img: 'https://cdn.pixabay.com/photo/2015/12/11/09/30/mobile-phone-1087845_1280.jpg',
					},
				}
			},
			macos: {
				title: 'MacOS에서 VPN 연결하는 방법',
				contents: {
					step1: {
						title: 'OVPN 파일 다운로드',
						desc: '1. MacOS 설명',
						img: 'https://cdn.pixabay.com/photo/2015/02/02/11/09/office-620822_1280.jpg',
					},
					step2: {
						title: 'OpenVPN Connect v3 다운로드',
						desc: '2. MacOS 설명',
						img: 'https://cdn.pixabay.com/photo/2015/06/24/15/45/hands-820272_1280.jpg',
					},
					step3: {
						title: 'MacOS',
						desc: '3. MacOS 설명',
						img: 'https://cdn.pixabay.com/photo/2015/02/02/15/28/bar-621033_1280.jpg',
					},
					step4: {
						title: 'VPN',
						desc: '4. MacOS 설명',
						img: 'https://cdn.pixabay.com/photo/2018/01/28/10/59/internet-3113279_1280.jpg',
					},
				}
			},
			ios: {
				title: 'iOS에서 VPN 연결하는 방법',
				contents: {
					step1: {
						title: 'OVPN 파일 다운로드',
						desc: '1. iOS 설명',
						img: 'https://cdn.pixabay.com/photo/2014/08/05/10/30/iphone-410324_1280.jpg',
					},
					step2: {
						title: 'OpenVPN Connect v3 다운로드',
						desc: '2. iOS 설명',
						img: 'https://cdn.pixabay.com/photo/2014/08/05/10/27/iphone-410311_1280.jpg',
					},
					step3: {
						title: 'iOS',
						desc: '3. iOS 설명',
						img: 'https://cdn.pixabay.com/photo/2017/04/03/15/52/mobile-phone-2198770_1280.png',
					},
					step4: {
						title: 'VPN',
						desc: '4. iOS 설명',
						img: 'https://cdn.pixabay.com/photo/2016/11/03/18/19/social-media-1795578_1280.jpg',
					},
				}
			},
			android: {
				title: 'Android에서 VPN 연결하는 방법',
				contents: {
					step1: {
						title: 'OVPN 파일 다운로드',
						desc: '1. Android 설명',
						img: 'https://cdn.pixabay.com/photo/2016/03/27/19/43/samsung-1283938_1280.jpg',
					},
					step2: {
						title: 'OpenVPN Connect v3 다운로드',
						desc: '2. Android 설명',
						img: 'https://cdn.pixabay.com/photo/2016/11/29/12/30/phone-1869510_1280.jpg',
					},
					step3: {
						title: 'Android',
						desc: '3. Android 설명',
						img: 'https://cdn.pixabay.com/photo/2016/06/03/13/57/digital-marketing-1433427_1280.jpg',
					},
					step4: {
						title: 'VPN',
						desc: '4. Android 설명',
						img: 'https://cdn.pixabay.com/photo/2016/11/03/18/19/social-media-1795578_1280.jpg',
					},
				}
			},
		},
		download: {
		// 다운로드 메뉴 콘텐츠
			title: '클라이언트 다운로드',
			group1: '내 기기용',
			group2: '다른 기기용',
			download: '다운로드',
			goto: '가이드 보기',
			clients: {
				windows: {
					os: 'Windows',
					desc: 'Windows용 OpenVPN Connect 클라이언트를 다운로드할 수 있습니다.'
				},
				macos: {
					os: 'MacOS',
					desc: 'MacOS용 OpenVPN Connect 클라이언트를 다운로드할 수 있습니다.'
				},
				ios: {
					os: 'iOS',
					desc: 'iOS용 OpenVPN Connect 클라이언트를 다운로드할 수 있습니다.'
				},
				android: {
					os: 'Android',
					desc: 'Android용 OpenVPN Connect 클라이언트를 다운로드할 수 있습니다.'
				},
			}
		},
		login: {
		// 로그인 페이지 콘텐츠
			title: 'VPN 사용자 포털',
			username: '아이디',
			usernamePl: 'VPN 계정을 입력하세요',
			password: '비밀번호',
			passwordPl: 'VPN 비밀번호를 입력하세요',
			login: '로그인'
		},
		mypage: {
		// 마이 페이지 콘텐츠
			title: '마이 페이지',
			download: 'OVPN 다운로드',
			group: {
				title: '그룹',
				rnd: '연구 & 개발 센터',
			},
			password: '비밀번호',
			passwordPl: '비밀번호 입력',
			passwordPlNew: '새 비밀번호 입력',
			passwordPlConfirm: '새 비밀번호 확인',
			button: {
				change: '변경',
				cancel: '취소',
				ok: '확인'
			}
		},
	},
}