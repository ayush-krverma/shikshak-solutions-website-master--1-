/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: NickNech (https://sketchfab.com/nicknech)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/ratatos-browntail-fdffb710e3fa48898bf5462186df0ced
title: Ratatos Browntail
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function RatatosScene({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/scene.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <primitive object={nodes.GLTF_created_0_rootJoint} />
          <skinnedMesh geometry={nodes.Object_7.geometry} material={materials.Ratatos_Body} skeleton={nodes.Object_7.skeleton} />
          <skinnedMesh geometry={nodes.Object_8.geometry} material={materials.Ratatos_Body_Transparant} skeleton={nodes.Object_8.skeleton} />
          <skinnedMesh geometry={nodes.Object_10.geometry} material={materials.Ratatos_ClothesMain} skeleton={nodes.Object_10.skeleton} />
          <skinnedMesh geometry={nodes.Object_12.geometry} material={materials.Ratatos_Coat} skeleton={nodes.Object_12.skeleton} />
          <skinnedMesh geometry={nodes.Object_14.geometry} material={materials.Ratatos_Hair} skeleton={nodes.Object_14.skeleton} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/scene.gltf')